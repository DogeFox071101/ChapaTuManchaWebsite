import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import Seguridad from './classes/Seguridad'
import Direccion from './interfaces/Direccion';
import DAOPersona from './dao/DAOPersona';
import DAOCliente from './dao/DAOCliente';
import Cliente from './classes/Cliente';
import Arrendador from './classes/Arrendador';
import Cancha from './classes/Cancha';
import CamposBD from './enums/CamposBD';
import Admin from './classes/Admin';
import DAOCancha from './dao/DAOCancha';
import DAOArrendador from './dao/DAOArrendador';

const app: Express = express()

app.use(express.json());
app.use(cors());
dotenv.config();
// Funciones auxiliares
app.post('/api/helper/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.generarHash(data)
    console.log("Hash generado correctamente")
    res.json({ msg : pw })
})
app.get('/api/helper/token', async (_req: Request, res: Response) => {
    const token = await Seguridad.generarToken()
    console.log("Token generado correctamente")
    res.json({ msg : token })
})
// Crear Cuenta
app.post('/api/usuario/crear', async (req: Request, res: Response) => {
    const data = req.body
    const date_birth = new Date(data.date_birth)
    const direccion: Direccion = data.direccion
    const cliente = new Cliente(Seguridad.generarUUID(), data.first_name, data.last_name, data.email, data.passwd, await Seguridad.generarToken(), Seguridad.generarUUID(), data.phone, date_birth, data.document_type, data.document_num, true, direccion)
    const respuesta = {
        id_user : cliente.id_customer,
        token_session : cliente.token_session,
        is_allowed : cliente.is_allowed
    }
    console.log(respuesta)
    res.json(respuesta)
})
// Inicio de Sesión
app.post('/api/usuario/login', async (req: Request, res: Response) => {
    const data = req.body
    const passwd = await Seguridad.generarServerHash(data.msg)
    const persona = await new DAOPersona().seleccionarUno(data.id, CamposBD.EMAIL)
    var respuesta = { id_user : "", token_session : "", is_allowed : false, warning: true }
    if (!persona) { res.json(respuesta) }
    if (!persona!.iniciarSesion(passwd.oldPw)) {
        if (!persona!.iniciarSesion(passwd.newPw)) { res.json(respuesta) }
        respuesta.warning = false
    } 
    respuesta.token_session = persona!.token_session
    if (persona instanceof Admin) {
        respuesta.id_user = persona!.id_admin
        res.json(respuesta)
    }
    if (persona instanceof Arrendador) {
        respuesta.id_user = persona!.id_lessor
        respuesta.is_allowed = persona!.is_allowed
        res.json(respuesta)
    }
    if (persona instanceof Cliente) {
        respuesta.id_user = persona!.id_customer
        respuesta.is_allowed = persona!.is_allowed
        res.json(respuesta)
    }
})
// Recuperar Contraseña
app.post('/api/usuario/contrasena/recuperar', async (_req: Request, _res: Response) => {
    // TODO
})
// Cambiar Contraseña
app.post('/api/usuario/contrasena/cambiar', async (req: Request, res: Response) => {
    const data = req.body
    const persona = await new DAOPersona().seleccionarUno(data.id_user, CamposBD.ID_PERSON)
    if (data.mode === "consulta") {
        res.json({ result : (data.msg === persona!.passwd) })
    }
    await persona!.cambiarContrasena(data.msg)
    const status = 0
    res.json({ status : status })
})
// Modificar Datos de Cuenta
app.post('/api/usuario/info/obtener', async (_req: Request, _res: Response) => {
    // TODO
})
app.post('/api/usuario/info/modificar', async (_req: Request, _res: Response) => {
    // TODO
})
// Cerrar Sesión
app.post('/api/usuario/logout', async (_req: Request, _res: Response) =>  {
    // TODO
})
// Registrar una Cancha
app.post('/api/cliente/upgrade', async (req: Request, res: Response) => {
    const id_user = req.body.id
    const usuario = await new DAOCliente().seleccionarUno(id_user, CamposBD.ID_ALL_USER)
    if (usuario) {
        const arrendador = await Arrendador.upgradeToArrendatario(usuario)
        res.json({ new_id_user: arrendador.id_lessor  })
    }
    res.json({ id_user: "Not Allowed" })
})
app.post('/api/cancha/registrar', async (req: Request, res: Response) => {
    const id_arrendador = req.body.id
    const direccion: Direccion = req.body.direccion
    const arrendador = await new DAOArrendador().seleccionarUno(id_arrendador, CamposBD.ID_LESSOR)
    if (arrendador) {
        await arrendador.registrarCancha(direccion, req.body.sportfield_name, req.body.capacity)
    }
    const estado = 0
    res.json({status : estado})
})
// Modificar Rango de Búaqueda de Canchas Deportivas
app.post('/api/cancha/buscar', async (_req: Request, _res: Response) => {
    // TODO
})
// Visualizar Información de Canchas Deportivas
app.post('/api/buscar_cancha_id', async (req: Request, res: Response) => {
    const id = req.body.msg
    const cancha = await new DAOCancha().seleccionarUnoID(id)
    res.json(cancha)
})
app.post('/api/buscar/cancha', async (_req: Request, res: Response) => {
    const cancha = await Cancha.toString()
    console.log("correctamente")
    res.json({ msg : cancha })
})
// Buscar usuarios por nombre
app.get('/api/buscar_usuarios', async (req: Request, res: Response) => {
    const nombre = req.body.msg
    const clientes = await new DAOCliente().seleccionarLista(nombre)
    for (const cliente of clientes) 
        res.json({ msg: cliente })
})
app.post('/api/buscar_usuario_id', async (req: Request, res: Response) => {
    const id = req.body.msg
    const cliente = await new DAOCliente().seleccionarUnoId(id)
    res.json(cliente!.verInfo())
})
// Revisar Información de Arrendadores
app.post('/api/arrendador/info/obtener', async (_req: Request, _res: Response) => {

})
// Reservar una Cancha Deportiva
app.post('/api/buscar_canchas', async (req: Request, res: Response) => {
    const codigoPostal = req.body.msg
    const canchas = await new DAOCancha().seleccionarLista(codigoPostal)
    for (const cancha of canchas) {
        res.json({ msg: cancha }); // no se puede hacer esto
    }
})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import Seguridad from './classes/Seguridad'
import Direccion from './interfaces/Direccion';
import DAOPersona from './dao/DAOPersona';
import DAOCliente from './dao/DAOCliente';
import Persona from './classes/Persona';
import Cliente from './classes/Cliente';
import Arrendador from './classes/Arrendador';
import Cancha from './classes/Cancha';
import CampoBusqueda from './enums/CampoBusqueda';
import Admin from './classes/Admin';

const app: Express = express()

app.use(express.json());
app.use(cors());
dotenv.config();

app.post('/api/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.generarHash(data)
    console.log("Hash generado correctamente")
    res.json({ msg : pw })
})
app.get('/api/token', async (_req: Request, res: Response) => {
    const token = await Seguridad.generarToken()
    console.log("Token generado correctamente")
    res.json({ msg : token })
})
app.get('/api/buscar_cancha', async (req: Request, res: Response) => {
    const id = req.body.msg
    const cliente = await new DAOCliente().seleccionarUnoId(id)
    res.json({ msg : cliente?.verInfo })
})
app.get('/api/buscar_usuario_id', async (req: Request, res: Response) => {
    const id = req.body.msg
    const cliente = await new DAOCliente().seleccionarUnoId(id)
    res.json({ msg : cliente?.verInfo })
})
app.post('/api/crear/cliente', async (req: Request, res: Response) => {
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
app.post('/api/login', async (req: Request, res: Response) => {
    const data = req.body
    const passwd = await Seguridad.generarServerHash(data.msg)
    const persona = await new DAOPersona().seleccionarUno(data.id, CampoBusqueda.EMAIL)
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
app.post('/api/cambiar/contrasena', async (req: Request, res: Response) => {
    const data = req.body
    const persona: Persona | undefined = await new DAOPersona().seleccionarUno(data.id_user, CampoBusqueda.ID_PERSONA)
    res.json(persona)
})
app.get('/api/buscar/cancha', async (_req: Request, res: Response) => {
    const cancha = await Cancha.toString()
    console.log("correctamente")
    res.json({ msg : cancha })
})
app.post('/api/obtener/perfil_usuario', async (_req: Request, _res: Response) => {
    
})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})
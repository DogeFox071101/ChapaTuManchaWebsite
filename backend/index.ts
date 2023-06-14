import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import Seguridad from './classes/Seguridad'
import Cliente from './classes/Cliente';
import Direccion from './interfaces/Direccion';
import Persona from './classes/Persona';
import Arrendador from './classes/Arrendador';

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
app.post('/api/crear/cliente', async (req: Request, res: Response) => {
    const data = req.body
    const fechaNac = new Date(data.date_birth)
    const direccion: Direccion = data.direccion
    const cliente = await Cliente.crearCliente(data.last_name, data.first_name, data.passwd, data.email, data.phone, fechaNac, data.document_type, data.document_num, direccion)
    const respuesta = {
        id : cliente.id_customer,
        tokenSession : cliente.tokenSession,
        is_allowed : cliente.is_allowed
    }
    console.log(respuesta)
    res.json(respuesta)
})
app.post('/api/login', async (req: Request, res: Response) => {
    const data = req.body
    const passwd = await Seguridad.generarServerHash(data.msg)
    const persona = await Persona.iniciarSesion(data.id, passwd.newPw)
    
    res.json(persona)
})
app.post('/api/obtener/perfil_usuario', async (req: Request, res: Response) => {
    
    const arrendador = Arrendador.upgradeToArrendatario()
})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})
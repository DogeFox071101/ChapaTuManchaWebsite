import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import Seguridad from './classes/Seguridad'
import Cliente from './classes/Cliente';
import Direccion from './interfaces/Direccion';

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
    const fechaNac = new Date(data.fechaNacimiento)
    const direccion: Direccion = {
        direccion : data.direccion,
        codigoPostal : data.codigoPostal,
        ciudad : data.ciudad,
        provincia : data.provincia,
        departamento : data.departamento,
        pais : data.pais
    }
    const cliente = await Cliente.crearCliente(data.apellidos, data.nombres, data.password, data.email, data.celular, fechaNac, data.tipoDocumento, data.numDocumento, direccion)
    const respuesta = {
        id : cliente.getIdCliente(),
        tokenSession : cliente.getTokenSession(),
    }
    console.log(respuesta)
    res.json(respuesta)
})
app.post('/api/login', async (req: Request, res: Response) => {
    const data = req.body
    const 
})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})
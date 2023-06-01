import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
// import Usuario from './classes/Usuario'
// import Seguridad from './classes/Seguridad'


const app: Express = express()

app.use(express.json());
app.use(cors());
dotenv.config();

app.post('/api/hash', async (req: Request, res: Response) => {
    // const data = req.body.msg
    // const pw = await Seguridad.hash(data)
    // res.json({ msg : pw })
})
app.post('/api/signin', async (req: Request, res: Response) => {
    /*
    Ingresa un valor {}
    */
    // const data = req.body
    // const usuario_nuevo = Usuario.crearCuenta()
    // const usuario_nuevo = new Usuario(null, data.nombre, data.correo, data.passwd, data.arrendador, data.documento, data.celular)
    // const salida = await usuario_nuevo.crear_cuenta()
    // res.json(salida)
})
app.post('/api/register_cancha', async (req: Request, res: Response) => {
    // const data = req.body
    // const usuario = new Usuario(data.id, null, null, null, null, null, null)
    // const salida = await usuario.registrar_cancha(data.cancha)
    // if (salida != null) {
    //     res.json({ result : 0 })
    // }
    // else {
    //     res.json({ result : -1 })
    // }
})
app.post('/api/login', async (req: Request, res: Response) => {
    // const data = req.body
    // const usuario = new Usuario(null, null, data.id, data.msg, null, null, null)
    // const salida = await usuario.iniciar_sesion()
    // res.json(salida)
})
app.post('/api/restore_password', async (req: Request, res: Response) => {
    // const data = req.body
    // const usuario = new Usuario(null, null, data.correo, null, null, null, null)
    // const salida = await usuario.recuperar_cuenta()
    // res.json({ result : salida })
})
app.post('/api/change_password', async (req: Request, res: Response) => {
    // const data = req.body
    // const usuario = new Usuario(data.id, null, null, data.msg, null, null, null)
    // const salida = await usuario.cambiar_contraseña(data.add)
    // res.json(salida)
})
app.post('/api/logout', (req: Request, res: Response) => {
    // const data = req.body
    // const usuario = new Usuario(data.id, null, null, null, null, null, null)
    // const salida = usuario.cerrar_sesion()
    // res.json(salida)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
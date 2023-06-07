import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import Seguridad from './classes/Seguridad'

const app: Express = express()

app.use(express.json());
app.use(cors());
dotenv.config();

app.post('/api/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.generarHash(data)
    res.json({ msg : pw })
})
app.get('/api/token', async (_req: Request, res: Response) => {
    const token = await Seguridad.generarToken()
    res.json({ msg : token })
})
// app.post('/api/register/user', async (req: Request, res: Response) => {
//     const dataUsuario = {
//         nombres         : req.body.nombres,
//         apellidos       : req.body.apellidos,
//         email           : req.body.email,
//         password        : req.body.password,
//         celular         : req.body.celular,
//         fechaNacimiento : req.body.fechaNacimiento,
//         tipoDocumento   : req.body.tipoDocumento,
//         numDocumento    : req.body.numDocumento
//     }
//     const nuevoUsuario = await Cliente.crearCuenta(dataUsuario)
//     res.json(req.body.msg)
// })
// app.post('/api/register/cancha', async (req: Request, res: Response) => {
//     res.json(req.body.msg)
// })
// app.post('/api/login', async (req: Request, res: Response) => {
//     res.json(req.body.msg)
// })
// app.post('/api/pw/restore', async (req: Request, res: Response) => {
//     res.json(req.body.msg)
// })
// app.post('/api/pw/change', async (req: Request, res: Response) => {
//     res.json(req.body.msg)
// })
// app.post('/api/logout', (req: Request, res: Response) => {
//     res.json(req.body.msg)
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})
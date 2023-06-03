import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import Seguridad from './classes/Seguridad'
import Cliente from './classes/Cliente';
import DataNuevoCliente from './interfaces/DataNuevoCliente';


const app: Express = express()

app.use(express.json());
app.use(cors());
dotenv.config();

app.post('/api/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.hash(data)
    res.json({ msg : pw })
})
app.get('/api/token', (_req: Request, res: Response) => {
    const token = Seguridad.tokenGenerator()
    res.json({ msg : token })
})
app.post('/api/register/user', async (req: Request, res: Response) => {
    const dataUsuario: DataNuevoCliente = req.body.dataUsuario
    const nuevoUsuario = await Cliente.crearCuenta(dataUsuario)
    res.json(req.body.msg)
})
app.post('/api/register/cancha', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/login', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/pw/restore', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/pw/change', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/logout', (req: Request, res: Response) => {
    res.json(req.body.msg)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})
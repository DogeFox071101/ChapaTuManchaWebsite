import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
// import Usuario from './classes/Usuario'
import Seguridad from './classes/Seguridad'


const app: Express = express()

app.use(express.json());
app.use(cors());
dotenv.config();

app.post('/api/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.hash(data)
    res.json({ msg : pw })
})
app.post('/api/signin', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/register_cancha', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/login', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/restore_password', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/change_password', async (req: Request, res: Response) => {
    res.json(req.body.msg)
})
app.post('/api/logout', (req: Request, res: Response) => {
    res.json(req.body.msg)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
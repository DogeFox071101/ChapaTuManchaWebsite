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
    
    console.log(data)
    res.json(data)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})
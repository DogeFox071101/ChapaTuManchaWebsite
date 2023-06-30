import express, {Request, Response} from 'express'
import Seguridad from '../../classes/Seguridad'

const router = express.Router()

router.get('/api/helper/token', async (_req: Request, res: Response) => {
    const token = await Seguridad.generarToken()
    console.log("Token generado correctamente")
    res.json({ msg : token })
})
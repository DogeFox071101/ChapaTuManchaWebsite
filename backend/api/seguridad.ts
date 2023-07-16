import express, {Request, Response} from 'express'
import Seguridad from '../classes/Seguridad'

const router = express.Router()

router.post('/api/helper/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.generarHash(data)
    console.log("Hash generado correctamente")
    res.json({ msg : pw })
})

router.get('/api/helper/token', async (_req: Request, res: Response) => {
    const token = await Seguridad.generarToken()
    console.log("Token generado correctamente")
    res.json({ msg : token })
})

export default router
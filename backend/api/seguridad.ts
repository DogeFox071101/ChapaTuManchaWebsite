import express, {Request, Response} from 'express'
import Seguridad from '../classes/Seguridad'
import cors from 'cors'

const router = express.Router()
router.use(cors())

router.post('/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.generarHash(data)
    res.json({ msg : pw })
})

router.get('/token', async (_req: Request, res: Response) => {
    const token = await Seguridad.generarToken()
    res.json({ msg : token })
})

export default router
import express, {Request, Response} from 'express'
import Seguridad from '../../classes/Seguridad'

const router = express.Router()

router.post('/api/helper/hash', async (req: Request, res: Response) => {
    const data = req.body.msg
    const pw = await Seguridad.generarHash(data)
    console.log("Hash generado correctamente")
    res.json({ msg : pw })
})
import express, {Request, Response} from "express"
import Usuario from "../classes/Usuario"
import Seguridad from "../classes/Seguridad"

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    
    res.json()
})

export default router
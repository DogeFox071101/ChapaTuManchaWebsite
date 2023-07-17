import express, {Request, Response} from "express"
import Usuario from "../classes/Usuario"
import Seguridad from "../classes/Seguridad"
import cors from "cors"

const router = express.Router()
router.use(cors())

router.post('/', async (req: Request, res: Response) => {
    
    res.json()
})

export default router
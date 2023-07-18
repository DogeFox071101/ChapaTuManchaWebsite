import express, {Request, Response} from "express"
import Usuario from "../classes/Usuario"
import Seguridad from "../classes/Seguridad"
import cors from "cors"
import Cancha from "../classes/Cancha"

const router = express.Router()
router.use(cors())

router.post('/', async (req: Request, res: Response) => {
    
    res.json()
})


router.post('/create', async (req: Request, res: Response) => {
    const data = req.body
    const id_cancha = Seguridad.generarUUID()
    const user = Usuario.getId()
    const cancha = new Cancha(id_cancha,data.name,data.description,data.capacity,data.price,data.img,data.datePost,data.timeStart,data.timeEnd,user,data.address))
    await cancha.crearCancha()
    const respuesta = {
        id_sportfield: id_cancha
    }
    res.json(respuesta)
})


export default router
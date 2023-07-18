import express, {Request, Response} from "express"
import Usuario from "../classes/Usuario"
import Seguridad from "../classes/Seguridad"
import cors from "cors"
import Cancha from "../classes/Cancha"
import UsersDAO from "../dao/UsersDAO"

const router = express.Router()
router.use(cors())

router.post('/create', async (req: Request, res: Response) => {
    const data = req.body
    console.log(data)
    // const usuario = await new UsersDAO().seleccionarPorID(data.id_user)
    // if (usuario) {
    //     const id_cancha = Seguridad.generarUUID()
    //     const cancha = new Cancha(id_cancha,data.name,data.description,data.capacity,data.price,data.img,data.datePost,data.timeStart,data.timeEnd,usuario,data.address)
    //     await cancha.crearCancha()
    //     res.json({result: true})
    // }
    res.json({result: false})
})


export default router
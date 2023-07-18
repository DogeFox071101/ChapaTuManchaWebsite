import express, {Request, Response} from "express"
import type Address from "../interfaces/Address"
import cors from "cors"
import Seguridad from '../classes/Seguridad'

const router = express.Router()
router.use(cors())

router.post('/', async (req: Request, res: Response) => {
    
    res.json()
})

router.post('/create', async (req: Request, res: Response) => {
    const data = req.body
    const idaddress = Seguridad.generarUUID()
    const direccion = new address(idaddress, data.address_line, data.city, data.doorNumber, data.district,data.state,data.country,data.zip_code)
    await direccion.crearCuenta()
    const respuesta = {
        id_address: idaddress
    }
    res.json(respuesta)
})

export default router
import express, {Request, Response} from "express"
import Usuario from "../classes/Usuario"
import Seguridad from "../classes/Seguridad"

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    const data = req.body
    const id_usuario = Seguridad.generarUUID()
    const token_sesion = await Seguridad.generarToken()
    const usuario = new Usuario(id_usuario, data.firstName, data.lastName, data.email, data.password, token_sesion)
    await usuario.crearCuenta()
    const respuesta = {
        id_user : id_usuario,
        token_session : token_sesion
    }
    res.json(respuesta)
})

export default router
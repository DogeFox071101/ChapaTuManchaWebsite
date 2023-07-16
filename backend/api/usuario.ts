import express, { Request, Response } from "express"
import Usuario from "../classes/Usuario"
import Seguridad from "../classes/Seguridad"
import UsersDAO from "../dao/UsersDAO"

const router = express.Router()

router.post('/create', async (req: Request, res: Response) => {
    const data = req.body
    const id_usuario = Seguridad.generarUUID()
    const token_sesion = await Seguridad.generarToken()
    const usuario = new Usuario(id_usuario, data.first_name, data.last_name, data.email, data.password, token_sesion)
    await usuario.crearCuenta()
    const respuesta = {
        id_user: id_usuario,
        token_session: token_sesion
    }
    res.json(respuesta)
})
router.post('/login', async (req: Request, res: Response) => {
    const data = req.body
    const lista_usuarios = await new UsersDAO().seleccionarPorCorreo(data.id)
    
    if (lista_usuarios) {
        const usuario = lista_usuarios[0]
        
        if (usuario.iniciarSesion(data.id, data.msg)) {
            const respuesta = {
                id_user: usuario.userId,
                token_session: await Seguridad.generarToken(),
                is_allowed: true
            }
        }
    }

    res.json(respuesta)
})

export default router
import express, { Request, Response, response } from "express"
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
    if (lista_usuarios && lista_usuarios[0]) {
        const usuario = lista_usuarios[0]
        const response = await usuario.iniciarSesion(data.msg)
        res.json(response)
    }
    else {
        res.json(null)
    }
})
router.post('/logout', async (req: Request, res: Response) => {
    const data = req.body
    const usuario = await new UsersDAO().seleccionarPorID(data.id_user)
    if (usuario) {
        await usuario.revocarTokenSession()
        res.json({result: true})
    }
    else{
        res.json({result: false})
    }
})
router.post('/getUserToken', async (req: Request, res: Response) => {
    const data = req.body
    const usuario = await new UsersDAO().seleccionarPorID(data.id_user)
    let result: boolean|null = null
    if (usuario) {
        result = usuario.compararTokenSession(data.token_session)
    }
    res.json({result: result})
})
router.post('/validateLessor', async (req: Request, res: Response) => {
    const data = req.body
    const usuario = await new UsersDAO().seleccionarPorID(data.id_user)
    let result: boolean|null = null
    if (usuario) {
        result = usuario.verificarArrendador()
    }
    res.json({
        result: result
    })
})
router.put('/completeData', async (req: Request, res: Response) => {
    const data = req.body
    const usuario = await new UsersDAO().seleccionarPorID(data.id_user)
    if (usuario) {
        await usuario.modificarDireccion(Seguridad.generarUUID(), data.address_line, data.address_ext, data.door_number, data.zip_code, data.district, data.city, data.state, data.country)
        await usuario.modificarTelefono(Seguridad.generarUUID(), data.prefix, data.phone_number, data.country, data.is_fixed)
        await usuario.modificarDocumentos(data.document_type, data.document_num)
        await usuario.modificarMetodosPago(data.payment_methods)
        await usuario.modificarFechaNacimiento(new Date(data.date_birth))
        await usuario.registrarArrendador()
        res.json({result: true})
    }
    else {
        res.json({result: false})
    }
})

export default router
import express, {Request, Response} from 'express'
import Seguridad from '../../classes/Seguridad'
import CamposBD from '../../enums/CamposBD'
import DAOPersona from '../../dao/UsersDAO'
import Admin from '../../classes/Administrador'
import Cliente from '../../classes/Cliente'
import Arrendador from '../../classes/Arrendador'

const router = express.Router()

router.post('/api/usuario/login', async (req: Request, res: Response) => {
    const data = req.body
    const passwd = await Seguridad.generarServerHash(data.msg)
    const persona = await new DAOPersona().seleccionarUno(data.id, CamposBD.PERSON_EMAIL)
    var respuesta = { id_user : "", token_session : "", is_allowed : false, warning: true }
    if (persona) {
        if (persona instanceof Admin) {
            respuesta.id_user = persona.id_admin
        }
        if (persona instanceof Arrendador) {
            respuesta.id_user = persona.id_lessor
            respuesta.is_allowed = persona.is_allowed
        }
        if (persona instanceof Cliente) {
            respuesta.id_user = persona.id_customer
            respuesta.is_allowed = persona.is_allowed
        }
        if (data.token_session != persona.token_session) {
            respuesta.token_session = await persona.actualizarToken(data.token_session)
        }
        else {
            respuesta.token_session = persona.token_session
            if (persona.iniciarSesion(passwd.oldPw)) {
                if (persona.iniciarSesion(passwd.newPw)) { res.json(respuesta) }
                respuesta.warning = false
            }
        }

    }
    res.json(respuesta)
})
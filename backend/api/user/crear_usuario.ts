import express, {Request, Response} from 'express'
import Seguridad from '../../classes/Seguridad'
import Cliente from '../../classes/Cliente'
import type Direccion from '../../interfaces/Address'

const router = express.Router()

router.post('/api/usuario/crear', async (req: Request, res: Response) => {
    const data = req.body
    const date_birth = new Date(data.date_birth)
    const direccion: Direccion = data.direccion
    const cliente = new Cliente(Seguridad.generarUUID(), data.first_name, data.last_name, data.email, data.passwd, await Seguridad.generarToken(), Seguridad.generarUUID(), data.phone, date_birth, data.document_type, data.document_num, true, direccion)
    if (cliente) {
        cliente.crearCliente()
    }
    const respuesta = {
        id_user : cliente.id_customer,
        token_session : cliente.token_session,
    }
    res.json(respuesta)
})
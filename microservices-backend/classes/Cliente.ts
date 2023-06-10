import DAOCliente from "../dao/DAOCliente";
import DAODireccion from "../dao/DAODireccion";
import DAOPersona from "../dao/DAOPersona";
import CriteriosCliente from "../interfaces/CriteriosCliente";
import CriteriosDireccion from "../interfaces/CriteriosDireccion";
import CriteriosPersona from "../interfaces/CriteriosPersona";
import Direccion from "../interfaces/Direccion";
import Persona from "./Persona";
import Seguridad from "./Seguridad";

class Cliente extends Persona {
    protected celular: string
    protected fechaNacimiento: Date
    protected tipoDocumento: string
    protected numDocumento: string
    protected direccion: Direccion
    protected idCliente: string
    protected isAllowed: boolean
    public constructor(apellidos: string, nombres: string, password: string, email: string, celular: string, fechaNacimiento: Date, tipoDocumento: string, numDocumento: string,  direccion: Direccion, idPersona: string, tokenSesion: string, idCliente: string, isAllowed: boolean) {
        super(apellidos, nombres, password, email, idPersona, tokenSesion)
        this.celular = celular
        this.fechaNacimiento = fechaNacimiento
        this.tipoDocumento = tipoDocumento
        this.numDocumento = numDocumento
        this.direccion = direccion
        this.idCliente = idCliente
        this.isAllowed = isAllowed
    }

    public getIdCliente() : string {
        return this.idCliente
    }
    public getEmail() : string {
        return this.email
    }
    public getPassword() : string {
        return this.password
    }
    public getTokenSession() : string {
        return this.tokenSesion
    }
    
    public static async crearCliente(apellidos: string, nombres: string, password: string, email: string, celular: string, fechaNacimiento: Date, tipoDocumento: string, numDocumento: string,  direccion: Direccion) {
        const criteriosPersona: CriteriosPersona = {
            id_person : Seguridad.generarUUID(),
            first_name : nombres,
            last_name : apellidos,
            email : email,
            password : await Seguridad.generarHash(process.env.PW_ACTUAL! + password),
            token_session : await Seguridad.generarToken()
        }
        const criteriosDireccion: CriteriosDireccion = {
            id_address : Seguridad.generarUUID(),
            address_name : direccion.direccion,
            zip_code : direccion.codigoPostal,
            city : direccion.ciudad,
            county : direccion.provincia,
            state_name : direccion.departamento,
            country : direccion.pais
        }
        const criteriosCliente: CriteriosCliente = {
            id_customer : Seguridad.generarUUID(),
            id_person : criteriosPersona.id_person,
            id_address : criteriosDireccion.id_address,
            phone : celular,
            date_birth : fechaNacimiento.getFullYear() + "-" + fechaNacimiento.getMonth() + "-" + fechaNacimiento.getDay(),
            document_type : tipoDocumento,
            document_num : numDocumento,
            is_allowed : true
        }
        await new DAOPersona().insertar(criteriosPersona)
        await new DAODireccion().insertar(criteriosDireccion)
        await new DAOCliente().insertar(criteriosCliente)
        
        return new Cliente(apellidos, nombres, password, email, celular, fechaNacimiento, tipoDocumento, numDocumento, direccion, criteriosPersona.id_person, criteriosPersona.token_session, criteriosCliente.id_customer, criteriosCliente.is_allowed)
    }
    public verInfo() {
        
    }
    public actualizarDatos(): void {
        
    }
    public reservarCancha() {

    }
    public upgradeToArrendatario() {

    }
}

export default Cliente
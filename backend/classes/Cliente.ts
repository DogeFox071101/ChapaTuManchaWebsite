import DAOCliente from "../dao/DAOCliente";
import DAODireccion from "../dao/DAODireccion";
import DAOPersona from "../dao/DAOPersona";
import Direccion from "../interfaces/Direccion";
import Persona from "./Persona";
import Seguridad from "./Seguridad";

class Cliente extends Persona {
    protected _id_customer: string
    protected _phone: string
    protected _date_birth: Date
    protected _document_type: string
    protected _document_num: string
    protected _is_allowed: boolean
    protected _direccion: Direccion
    public constructor(id_person:string, first_name:string, last_name:string, email:string, passwd:string, token_session:string, id_customer:string, phone:string, date_birth:Date, document_type:string, document_num:string, is_allowed:boolean, direccion:Direccion) {
        super(id_person, first_name, last_name, email, passwd, token_session)
        this._id_customer = id_customer
        this._phone = phone
        this._date_birth = date_birth
        this._document_type = document_type
        this._document_num = document_num
        this._is_allowed = is_allowed
        this._direccion = direccion
    }
    public get id_customer() : string {
        return this._id_customer
    }
    public get email() : string {
        return this._email
    }
    public get passwd() : string {
        return this._passwd
    }
    public get token_session() : string {
        return this._token_session
    }
    public get is_allowed() : boolean {
        return this._is_allowed
    }
    public static async crearCliente(first_name: string, last_name: string, email: string, passwd: string, phone: string, date_birth: Date, document_type: string, document_num: string,  direccion: Direccion) {
        const criteriosPersona = {
            id_person : Seguridad.generarUUID(),
            first_name : first_name,
            last_name : last_name,
            email : email,
            passwd : await Seguridad.generarHash(process.env.PW_ACTUAL! + passwd),
            token_session : await Seguridad.generarToken()
        }
        const criteriosDireccion = {
            id_address : Seguridad.generarUUID(),
            address_name : direccion.direccion,
            zip_code : direccion.codigoPostal,
            city : direccion.ciudad,
            county : direccion.provincia,
            state_name : direccion.departamento,
            country : direccion.pais
        }
        const criteriosCliente = {
            id_customer : Seguridad.generarUUID(),
            id_person : criteriosPersona.id_person,
            id_address : criteriosDireccion.id_address,
            phone : phone,
            date_birth : new Date(date_birth.getFullYear() + "-" + date_birth.getMonth() + "-" + date_birth.getDay()),
            document_type : document_type,
            document_num : document_num,
            is_allowed : true
        }
        await new DAOPersona().insertar(criteriosPersona)
        await new DAODireccion().insertar(criteriosDireccion)
        await new DAOCliente().insertar(criteriosCliente)
        return new Cliente(criteriosPersona.id_person, first_name, last_name, email, passwd, criteriosPersona.token_session, criteriosCliente.id_customer, phone, criteriosCliente.date_birth, document_type, document_num, criteriosCliente.is_allowed, direccion)
    }
    
    public verInfo() {
        
    }
    public actualizarDatos(): void {
        
    }
    public reservarCancha() {

    }
}


export default Cliente
import DAOCliente from "../dao/DAOCliente";
import DAODireccion from "../dao/DAODireccion";
import DAOPersona from "../dao/DAOPersona";
import Direccion from "../interfaces/Direccion";
import Persona from "./Persona";

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
    public get id_person(): string {
        return this.id_person
    }
    public get first_name(): string {
        return this.first_name
    }
    public get last_name(): string {
        return this.last_name
    }
    public get phone(): string {
        return this.phone
    }
    public get date_birth(): Date {
        return this.date_birth
    }
    public get document_type(): string {
        return this.document_type
    }
    public get document_num(): string {
        return this.document_num
    }
    public get direccion(): Direccion {
        return this.direccion
    }
    public async crearCliente() {
        await new DAOPersona().insertar(this)
        await new DAODireccion().insertar(this)
        await new DAOCliente().insertar(this)
    }
    
    public async verInfo() {
        const cliente = { nombres: this.first_name, apellidos: this.last_name, fecha_nacimiento: this._date_birth, direccion: this.direccion ,telefono: this.phone, email: this.email};
        return cliente
    }
    public actualizarDatos(): void {
        
    }
    public reservarCancha() {

    }
}


export default Cliente
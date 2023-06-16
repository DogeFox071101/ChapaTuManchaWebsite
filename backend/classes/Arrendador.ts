import DAOArrendador from "../dao/DAOArrendador";
import Seguridad from "./Seguridad";
import Direccion from "../interfaces/Direccion";
import Cliente from "./Cliente";
import Cancha from "./Cancha";
import DAOCancha from "../dao/DAOCancha";
import DAODireccion from "../dao/DAODireccion";
//import Deportes from "../enums/Deportes";

class Arrendador extends Cliente {
    protected _id_lessor: string
    protected _date_register: Date
    public constructor(id_person:string, first_name:string, last_name:string, email:string, passwd:string, token_session:string, id_customer:string, phone:string, date_birth:Date, document_type:string, document_num:string, is_allowed:boolean, direccion:Direccion, id_lessor:string, date_register:Date) {
        super(id_person, first_name, last_name, email, passwd, token_session, id_customer, phone, date_birth, document_type, document_num, is_allowed, direccion)
        this._id_lessor = id_lessor
        this._date_register = date_register
    }
    public get id_lessor(): string {
        return this._id_lessor
    }
    public get date_register(): Date {
        return this._date_register
    }
    public async registrarCancha(direccion: Direccion, sportfield_name: string, capacity: number) {    
        const cancha = new Cancha(Seguridad.generarUUID(), this, direccion, sportfield_name, capacity)
        const id_address = Seguridad.generarUUID()
        const criteriosCancha = {
            id_sportfield: cancha.id_sportfield,
            id_lessor: this._id_lessor,
            id_address: id_address,
            sportfield_name: cancha.sportfield_name,
            capacity: cancha.capacity
        }
        const criteriosDireccion = {
            id_address: id_address,
            address_name: cancha.direccion.direccion,
            zip_code: cancha.direccion.codigoPostal,
            city: cancha.direccion.ciudad,
            county: cancha.direccion.provincia,
            state_name: cancha.direccion.departamento,
            country: cancha.direccion.pais
        }
        await new DAOCancha().insertar(criteriosCancha)
        await new DAODireccion().insertar(criteriosDireccion)
    }
    public actualizarDatos() {
        
    }
    public verInfoArrendador() {
        const arrendador = { nombres: this.first_name, apellidos: this.last_name, email: this.email, telefono: this.phone }
        return arrendador
    }
    public static async upgradeToArrendatario(cliente: Cliente) {
        const criteriosArrendatario = {
            id_lessor :  Seguridad.generarUUID(),
            date_register: new Date(),
            idCustomer: cliente.id_customer,
        }
        await new DAOArrendador().insertar(criteriosArrendatario);
        return new Arrendador( cliente.id_person , cliente.first_name, cliente.last_name, cliente.email, cliente.passwd, cliente.token_session, cliente.id_customer, cliente.phone, cliente.date_birth , cliente.document_type, cliente.document_num, cliente.is_allowed, cliente.direccion, criteriosArrendatario.id_lessor, criteriosArrendatario.date_register)
    }
}

export default Arrendador
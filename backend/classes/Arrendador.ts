import Cliente from "./Cliente";
import Direccion from "../interfaces/Direccion";
class Arrendador extends Cliente {
    protected _id_lessor: string
    protected _date_register: Date
    public constructor(id_person:string, first_name:string, last_name:string, email:string, passwd:string, token_session:string, id_customer:string, phone:string, date_birth:Date, document_type:string, document_num:string, is_allowed:boolean, direccion:Direccion, id_lessor:string, date_register:Date) {
        super(id_person, first_name, last_name, email, passwd, token_session, id_customer, phone, date_birth, document_type, document_num, is_allowed, direccion)
        this._id_lessor = id_lessor
        this._date_register = date_register
    }
    public registrarCancha() {

    }
    public actualizarDatos() {
        
    }
    public verInfo() {
        
    }
}

export default Arrendador
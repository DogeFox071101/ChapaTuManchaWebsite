import Cliente from "./Cliente";
import Direccion from "../interfaces/Direccion";
import Seguridad from "./Seguridad";
import DAOArrendador from "../dao/DAOArrendador";
import Cancha from "./Cancha";
import Deportes from "../enums/Deportes";
class Arrendador extends Cliente {
    protected _id_lessor: string
    protected _date_register: Date
    public constructor(id_person:string, first_name:string, last_name:string, email:string, passwd:string, token_session:string, id_customer:string, phone:string, date_birth:Date, document_type:string, document_num:string, is_allowed:boolean, direccion:Direccion, id_lessor:string, date_register:Date) {
        super(id_person, first_name, last_name, email, passwd, token_session, id_customer, phone, date_birth, document_type, document_num, is_allowed, direccion)
        this._id_lessor = id_lessor
        this._date_register = date_register
    }
    public async registrarCancha( idCancha: string, nombreLocal: string, aforo: number, direccion: Direccion, deportesDisponibles: Deportes[]) 
    {    
        await Cancha.crearCancha({ idCancha, nombreLocal, arrendador: this, aforo, direccion, deportesDisponibles })
    }
    public actualizarDatos() {
        
    }
    public verInfo() {
        
    }
    public static async upgradeToArrendatario(cliente: Cliente) {
        const criteriosArrendatario = {
            id_lessor :  Seguridad.generarUUID(),
            date_register: new Date(),
            idCustomer: cliente.id_customer,
        }
        await new DAOArrendador().insertar(criteriosArrendatario);
        return new Arrendador(cliente._id_person, cliente._first_name, cliente._last_name, cliente.email, cliente.passwd, cliente.tokenSession, cliente.id_customer, cliente._phone, cliente._date_birth, cliente._document_type, cliente._document_num, cliente.is_allowed, cliente._direccion, criteriosArrendatario.id_lessor, criteriosArrendatario.date_register)
    }
}

export default Arrendador
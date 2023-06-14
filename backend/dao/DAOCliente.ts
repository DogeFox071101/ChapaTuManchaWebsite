import Cliente from "../classes/Cliente";
import Conexion from "../database/Conexion";
import Consulta from "../database/Consulta";
import DB from "../database/DB";
import PgDB from "../database/PgDB";
import CampoBusqueda from "../enums/CampoBusqueda";
import DAO from "./DAO";

class DAOCliente extends DAO{
    private database: DB = new PgDB
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()

    public async insertar(criterios: any) {
        const query = `INSERT INTO customer VALUES ('${criterios.id_customer}', '${criterios.id_person}', '${criterios.id_address}', '${criterios.phone}', '${criterios.date_birth}', '${criterios.document_type}', '${criterios.document_num}', '${criterios.is_allowed}')`
        try {
            await this.connection.open()
            this.consulta.set(query)
            await this.consulta.execute()
            await this.connection.close()
        }
        catch (error) {
            console.error(error)
            await this.connection.close()
        }
    }
    public async seleccionarUno(criterio: string, campoBusqueda: CampoBusqueda) {
        const query = `SELECT person.*, customer.* FROM customer FULL OUTER JOIN person ON customer.id_person = person.id_person WHERE ${campoBusqueda} = '${criterio}';`
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            const data = solicitud.rows[0]
            return new Cliente(data.last_name, data.first_name, data.passwd, data.email, data.phone, data.date_birth, data.document_type, data.document_num, data.id_address, data.id_person, data.token_session, data.id_customer, data.is_allowed)
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return undefined
        }
    }
    public seleccionarLista(_criterio: string, _campoBusqueda: CampoBusqueda) {
        throw new Error("Method not implemented.");
    }
    public seleccionarTodos() {
        throw new Error("Method not implemented.");
    }
    public actualizar() {
        throw new Error("Method not implemented.");
    }
    public eliminar() {
        throw new Error("Method not implemented.");
    }
    
}

export default DAOCliente
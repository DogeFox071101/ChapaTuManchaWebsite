import Arrendador from "../classes/Arrendador";
import type DB from "../database/DB";
import PgDB from "../database/PgDB";
import CamposBD from "../enums/CamposBD";
import DAO from "./DAO";

class DAOArrendador extends DAO {
    private database: DB = new PgDB()
    private connection = this.database.getConexion()
    private consulta = this.database.getConsulta()
    public async insertar(criterios: any) {
        const query = `INSERT INTO lessor VALUES ('${criterios.id_lessor}', '${criterios.id_customer}', '${criterios.registration_date}')`
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
    public async seleccionarUno(criterio: string, campoBusqueda: CamposBD) {
        const query = `SELECT person.*, customer.*, lessor.* FROM lessor LEFT JOIN customer ON lessor.id_customer = customer.id_customer LEFT JOIN person ON customer.id_person = person.id_person WHERE ${campoBusqueda} = '${criterio}';`
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            const data = solicitud.rows[0]
            return new Arrendador(data.id_person, data.first_name, data.last_name, data.email, data.passwd, data.token_session, data.id_customer, data.phone, data.date_birth, data.document_type, data.document_num, data.is_allowed, data.direccion, data.id_lessor, data.date_register)
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return undefined
        }
    }
    public seleccionarLista(_criterio: string, _campoBusqueda: CamposBD) {
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

export default DAOArrendador
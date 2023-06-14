import DB from "../database/DB";
import PgDB from "../database/PgDB";
import CampoBusqueda from "../enums/CampoBusqueda";
import DAO from "./DAO";

class DAOArrendador extends DAO {
    private database: DB = new PgDB()
    private connection = this.database.getConexion()
    private consulta = this.database.getConsulta()
    public insertar() {
        throw new Error("Method not implemented.");
    }
    public async seleccionarUno(criterio: string, campoBusqueda: CampoBusqueda) {
        const query = `SELECT person.*, customer.*, lessor.* FROM lessor FULL OUTER JOIN customer ON lessor.id_customer = customer.id_customer FULL OUTER JOIN person ON customer.id_person = person.id_person WHERE ${campoBusqueda} = '${criterio}';`
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            return solicitud.rows[0]
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return {}
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

export default DAOArrendador
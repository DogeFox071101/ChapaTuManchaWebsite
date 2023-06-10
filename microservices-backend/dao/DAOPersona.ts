import DB from "../database/DB"
import PgDB from "../database/PgDB"
import CampoBusqueda from "../enums/CampoBusqueda"
import CriteriosPersona from "../interfaces/CriteriosPersona"
import DAO from "./DAO"

class DAOPersona extends DAO {
    private database: DB = new PgDB()
    private connection = this.database.getConexion()
    private consulta = this.database.getConsulta()

    public async insertar(criterios: CriteriosPersona) {
        const query = `INSERT INTO person VALUES('${criterios.id_person}', '${criterios.first_name}', '${criterios.last_name}', '${criterios.email}', '${criterios.password}', '${criterios.token_session}');`
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
        const query = `SELECT * FROM person WHERE ${campoBusqueda} = '${criterio}';`
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
    public async seleccionarLista() {
        throw new Error("Method not implemented.");
    }
    public async seleccionarTodos() {
        const query = "SELECT * FROM persona;"
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            return solicitud.rows
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return new Array<any>()
        }
    }
    public async actualizar() {
        throw new Error("Method not implemented.");
    }
    public async eliminar() {
        throw new Error("Method not implemented.");
    }
}

export default DAOPersona
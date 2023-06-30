import DB from "../database/DB"
import PgDB from "../database/PgDB"

class DAOSportfields {
    private database: DB = new PgDB()
    private connection = this.database.getConexion()
    private consulta = this.database.getConsulta()
    public insertar() {
        throw new Error("Method not implemented.")
    }
    public seleccionar() {
        throw new Error("Method not implemented.")
    }
    public actualizar() {
        throw new Error("Method not implemented.")
    }
    public eliminar() {
        throw new Error("Method not implemented.")
    }
}

export default DAOSportfields
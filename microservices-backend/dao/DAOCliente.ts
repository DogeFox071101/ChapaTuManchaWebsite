import Conexion from "../database/Conexion";
import Consulta from "../database/Consulta";
import DB from "../database/DB";
import PgDB from "../database/PgDB";
import CampoBusqueda from "../enums/CampoBusqueda";
import CriteriosCliente from "../interfaces/CriteriosCliente";
import DAO from "./DAO";

class DAOCliente extends DAO{
    private database: DB = new PgDB
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()

    public async insertar(criterios: CriteriosCliente) {
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
    public seleccionarUno(_criterio: string, _campoBusqueda: CampoBusqueda) {
        throw new Error("Method not implemented.");
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
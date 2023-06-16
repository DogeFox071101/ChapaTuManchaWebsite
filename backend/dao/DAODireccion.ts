import Conexion from "../database/Conexion";
import Consulta from "../database/Consulta";
import DB from "../database/DB";
import PgDB from "../database/PgDB";
import CamposBD from "../enums/CamposBD";
import DAO from "./DAO";

class DAODireccion extends DAO {
    private database: DB = new PgDB
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()
    
    public async insertar(criterios: any) {
        const query = `INSERT INTO addresses VALUES ('${criterios.id_address}', '${criterios.address_name}', '${criterios.zip_code}', '${criterios.city}', '${criterios.county}', '${criterios.state_name}', '${criterios.country}');`
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
    public seleccionarUno(_criterio: string, _campoBusqueda: CamposBD) {
        throw new Error("Method not implemented.");
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

export default DAODireccion
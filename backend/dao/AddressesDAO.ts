import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/PgDB"
import type Address from "../interfaces/Address"

class AddressesDAO {
    private database: DB = new PgDB()
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()
    public async insertar(address: Address) {
        const query = {
            text: "INSERT INTO addresses() VALUES ()",
            values: []
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            await this.consulta.execute()
            await this.connection.close()
        }
        catch (error){
            console.error(error)
            await this.connection.close()
        }
    }
    public async seleccionar() {

    }
    public async modificar() {

    }
    public async eliminar() {

    }
}
export default AddressesDAO
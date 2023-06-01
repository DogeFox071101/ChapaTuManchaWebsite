import { Client } from "ts-postgres";
import Conexion from "./Conexion";

class PgConexion extends Conexion {
    protected client : Client
    
    constructor(client : Client) {
        super()
        this.client = client
    }
    public open() {
        return this.client.connect()
    }
    public close() {
        return this.client.end()
    }
}

export default PgConexion
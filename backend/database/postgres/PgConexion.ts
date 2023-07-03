import { Client } from "pg";
import Conexion from "../Conexion";

class PgConexion extends Conexion {
    protected client : Client
    public constructor(client : Client) {
        super()
        this.client = client
    }
    public async open(): Promise<void> {
        return await this.client.connect()
    }
    public async close(): Promise<void> {
        return await this.client.end()
    }
}

export default PgConexion
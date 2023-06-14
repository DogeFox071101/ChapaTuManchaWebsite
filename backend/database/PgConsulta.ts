import { Client } from "pg";
import Consulta from "./Consulta";

class PgConsulta extends Consulta {
    protected client : Client
    protected query : string = ""
    public constructor(client : Client) {
        super()
        this.client = client
    }
    public set(text : string) {
        this.query = text
    }
    public async execute() {
        return await this.client.query(this.query)
    }
}

export default PgConsulta
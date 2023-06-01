import { Client } from "ts-postgres";
import Consulta from "./Consulta";

class PgConsulta extends Consulta {
    protected client : Client
    protected query : string
    constructor(client : Client) {
        super()
        this.client = client
    }
    public set(text : string) {
        this.query = text
    }
    public execute() {
        this.client.query(this.query)
    }
}

export default PgConsulta
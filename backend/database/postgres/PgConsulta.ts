import { Client } from "pg";
import Consulta from "../Consulta";

class PgConsulta extends Consulta {
    protected client : Client
    protected query : any = {}
    public constructor(client : Client) {
        super()
        this.client = client
    }
    public set(input: string | Object) {
        this.query = input
    }
    public async execute() {
        return await this.client.query(this.query)
    }
}

export default PgConsulta
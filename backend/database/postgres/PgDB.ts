import { Client } from "pg";
import DB from "../DB";
import PgConexion from "./PgConexion";
import PgConsulta from "./PgConsulta";

class PgDB extends DB {
    protected client = new Client()
    public getConexion() {
        return new PgConexion(this.client)
    }
    public getConsulta() {
        return new PgConsulta(this.client)
    }
}

export default PgDB
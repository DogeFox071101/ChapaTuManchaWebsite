import { Client } from "ts-postgres";
import DB from "./DB";
import PgConexion from "./PgConexion";
import PgConsulta from "./PgConsulta";

class PgDB extends DB {
    protected client = new Client({
        host: "127.0.0.1",
        port: 5432,
        database: "chapatumancha_db",
        user: "user_ctm_backend",
        password: "ctmctmctm2023"
    })
    public getConexion() {
        return new PgConexion(this.client)
    }
    public getConsulta() {
        return new PgConsulta(this.client)
    }
}

export default PgDB
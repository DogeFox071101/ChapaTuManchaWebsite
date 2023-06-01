"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_postgres_1 = require("ts-postgres");
const DB_1 = __importDefault(require("./DB"));
const PgConexion_1 = __importDefault(require("./PgConexion"));
const PgConsulta_1 = __importDefault(require("./PgConsulta"));
class PgDB extends DB_1.default {
    constructor() {
        super(...arguments);
        this.client = new ts_postgres_1.Client({
            host: "127.0.0.1",
            port: 5432,
            database: "chapatumancha_db",
            user: "user_ctm_backend",
            password: "ctmctmctm2023"
        });
    }
    getConexion() {
        return new PgConexion_1.default(this.client);
    }
    getConsulta() {
        return new PgConsulta_1.default(this.client);
    }
}
exports.default = PgDB;
//# sourceMappingURL=PgDB.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conexion_1 = __importDefault(require("./Conexion"));
class PgConexion extends Conexion_1.default {
    constructor(client) {
        super();
        this.client = client;
    }
    open() {
        return this.client.connect();
    }
    close() {
        return this.client.end();
    }
}
exports.default = PgConexion;
//# sourceMappingURL=PgConexion.js.map
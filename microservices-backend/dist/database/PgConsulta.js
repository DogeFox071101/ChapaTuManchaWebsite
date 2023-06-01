"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Consulta_1 = __importDefault(require("./Consulta"));
class PgConsulta extends Consulta_1.default {
    constructor(client) {
        super();
        this.query = "";
        this.client = client;
    }
    set(text) {
        this.query = text;
    }
    execute() {
        this.client.query(this.query);
    }
}
exports.default = PgConsulta;
//# sourceMappingURL=PgConsulta.js.map
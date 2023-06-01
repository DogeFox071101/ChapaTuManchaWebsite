"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Cliente extends Usuario_1.default {
    constructor(idUsuario, nombres, apPaterno, apMaterno, password, email, tknAcc, celular, fNacimiento, documento, isAllowed, favorites) {
        super(idUsuario, nombres, apPaterno, apMaterno, password, email, tknAcc);
        this.celular = celular;
        this.fNacimiento = fNacimiento;
        this.documento = documento;
        this.isAllowed = isAllowed;
        this.favorites = favorites;
    }
}
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map
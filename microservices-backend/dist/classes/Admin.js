"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Admin extends Usuario_1.default {
    constructor(idUsuario, nombres, apPaterno, apMaterno, password, email, tknAcc, lastLogin, accessLevel) {
        super(idUsuario, nombres, apPaterno, apMaterno, password, email, tknAcc);
        this.lastLogin = lastLogin;
        this.accessLevel = accessLevel;
    }
}
exports.default = Admin;
//# sourceMappingURL=Admin.js.map
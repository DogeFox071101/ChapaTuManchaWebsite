"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// import Usuario from './classes/Usuario'
// import Seguridad from './classes/Seguridad'
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
dotenv_1.default.config();
app.post('/api/hash', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body.msg
    // const pw = await Seguridad.hash(data)
    // res.json({ msg : pw })
}));
app.post('/api/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*
    Ingresa un valor {}
    */
    // const data = req.body
    // const usuario_nuevo = Usuario.crearCuenta()
    // const usuario_nuevo = new Usuario(null, data.nombre, data.correo, data.passwd, data.arrendador, data.documento, data.celular)
    // const salida = await usuario_nuevo.crear_cuenta()
    // res.json(salida)
}));
app.post('/api/register_cancha', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body
    // const usuario = new Usuario(data.id, null, null, null, null, null, null)
    // const salida = await usuario.registrar_cancha(data.cancha)
    // if (salida != null) {
    //     res.json({ result : 0 })
    // }
    // else {
    //     res.json({ result : -1 })
    // }
}));
app.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body
    // const usuario = new Usuario(null, null, data.id, data.msg, null, null, null)
    // const salida = await usuario.iniciar_sesion()
    // res.json(salida)
}));
app.post('/api/restore_password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body
    // const usuario = new Usuario(null, null, data.correo, null, null, null, null)
    // const salida = await usuario.recuperar_cuenta()
    // res.json({ result : salida })
}));
app.post('/api/change_password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body
    // const usuario = new Usuario(data.id, null, null, data.msg, null, null, null)
    // const salida = await usuario.cambiar_contraseña(data.add)
    // res.json(salida)
}));
app.post('/api/logout', (req, res) => {
    // const data = req.body
    // const usuario = new Usuario(data.id, null, null, null, null, null, null)
    // const salida = usuario.cerrar_sesion()
    // res.json(salida)
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map
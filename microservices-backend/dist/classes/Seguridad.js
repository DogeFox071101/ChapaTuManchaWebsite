'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Seguridad {
    /**
     * Produce una clave hash empleando el algoritmo SHA-256
     */
    static hash(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const utf8 = new TextEncoder().encode(text);
            const hashBuffer = yield crypto.subtle.digest('SHA-256', utf8);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map((bytes => bytes.toString(16).padStart(2, '0'))).join('');
            return hashHex;
        });
    }
    static tokenGenerator() {
    }
}
exports.default = Seguridad;
//# sourceMappingURL=Seguridad.js.map
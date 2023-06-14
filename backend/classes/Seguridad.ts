'use strict'
import crypto from 'crypto'
/**
 * Provee funcionalidades de seguridad para CTM
 */
class Seguridad {
    private constructor() {}
    /**
     * Produce una clave hash empleando el algoritmo SHA-256
     */
    public static async generarHash (text: string) {
        const utf8 = new TextEncoder().encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-512', utf8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(
            (bytes => bytes.toString(16).padStart(2, '0'))
            ).join('')
        return hashHex;
    }
    public static async generarServerHash (text: string) {
        const newPw = await this.generarHash(process.env.PW_ACTUAL! + text)
        const oldPw = await this.generarHash(process.env.PW_COMPAT! + text)
        return {
            newPw : newPw,
            oldPw : oldPw
        }
    }
    /**
     * Genera un token aleatorio y lo devuelve en una cadena de texto
     */
    public static async generarToken() {
        const value = Math.random().toString(36).substring(2)
        return await this.generarHash(value)
    }
    /**
     * Genera un UUID único para cada invocación
     */
    public static generarUUID(): string {
        return crypto.randomUUID()
    }
    /**
     * Devuelve la instancia única de la clase Seguridad
     */
    public static obtenerInstancia(): Seguridad {
        return this
    }
}

export default Seguridad
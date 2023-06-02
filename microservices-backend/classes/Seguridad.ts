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
    public static async hash(text: string) {
        const utf8 = new TextEncoder().encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-512', utf8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(
            (bytes => bytes.toString(16).padStart(2, '0'))
            ).join('')
        console.log("Hash generado correctamente")
        return hashHex;
    }
    /**
     * Genera un token aleatorio y lo devuelve en una cadena de texto
     */
    public static tokenGenerator() {
        const value = Math.random().toString(36).substring(2)
        console.log("Token generado correctamente")
        return value + value + value
    }
    /**
     * Devuelve la instancia única de la clase Seguridad
     */
    public static obtenerInstancia(): Seguridad {
        return this
    }
}

export default Seguridad
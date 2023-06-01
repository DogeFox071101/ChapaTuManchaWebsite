'use strict'
import crypto from 'crypto'
class Seguridad {
    /**
     * Produce una clave hash empleando el algoritmo SHA-256
     */
    public static async hash(text: string) {
        const utf8 = new TextEncoder().encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-512', utf8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(
            (bytes => bytes.toString(16).padStart(2, '0'))
            ).join('');
        return hashHex;
    }
    public static tokenGenerator() {

    }
}

export default Seguridad
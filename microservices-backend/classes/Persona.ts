/**
 * Clase Persona
 */
abstract class Persona {
    protected idPersona: string
    protected nombres: string
    protected apellidos: string
    protected password: string
    protected email: string
    protected tokenSesion: string
    public constructor(idPersona: string, nombres: string, apellidos: string, password: string, email: string, tokenSesion: string) {
        this.idPersona = idPersona
        this.nombres = nombres
        this.apellidos = apellidos
        this.password = password
        this.email = email
        this.tokenSesion = tokenSesion
    }
    /**
     * Ejecuta el inicio de sesión y retorna la información de una persona
     */
    public iniciarSesion() {
        
    }
    /**
     * Ejecuta un cambio de contraseña
     */
    public cambiarContrasena() {

    }
    /**
     * Reestablece una contraseña
     */
    public restablecerContrasena() {

    }
    /**
     * Devuelve la información de una persona
     */
    public abstract verInfo(): any 
    /**
     * Actualiza los datos de una persona
     */
    public abstract actualizarDatos(): any
    /**
     * Cierra la sesión y elimina el token de sesión reciente
     */
    public cerrarSesion() {

    }
}

export default Persona
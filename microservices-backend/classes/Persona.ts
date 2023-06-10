/**
 * Clase Persona
 */
abstract class Persona {
    protected nombres: string
    protected apellidos: string
    protected password: string
    protected email: string
    protected idPersona: string
    protected tokenSesion: string
    public constructor(apellidos: string, nombres: string, password: string, email: string, idPersona: string, tokenSesion: string){
        this.apellidos = apellidos
        this.nombres = nombres
        this.password = password
        this.email = email
        this.idPersona = idPersona
        this.tokenSesion = tokenSesion
    }
    /**
     * Ejecuta el inicio de sesión y retorna la información de una persona
     */
    public async iniciarSesion(_email: string, _password: string) {
        
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
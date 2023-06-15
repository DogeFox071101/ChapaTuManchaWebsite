/**
 * Clase Persona
 */
abstract class Persona {
    protected _id_person: string
    protected _first_name: string
    protected _last_name: string
    protected _email: string
    protected _passwd: string
    protected _token_session: string
    public constructor(id_person: string, first_name: string, last_name: string, email: string, passwd: string, token_session: string) {
        this._id_person = id_person
        this._first_name = first_name
        this._last_name = last_name
        this._email = email
        this._passwd = passwd
        this._token_session = token_session
    }
    public get id_person() : string {
        return this._id_person
    }
    public get first_name() : string {
        return this._first_name
    }
    public get last_name() : string {
        return this._last_name
    }
    public get email() : string {
        return this._email
    }
    public get passwd() : string {
        return this._passwd
    }
    public get token_session() : string {
        return this._token_session
    }
    public iniciarSesion(passwd: string): boolean {
        if (passwd !== this._passwd) {
            return false
        }
        return true
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
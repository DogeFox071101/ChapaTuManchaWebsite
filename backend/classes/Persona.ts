import DAOPersona from "../dao/DAOPersona"
import CampoBusqueda from "../enums/CampoBusqueda"

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
    public get passwd() : string {
        return this._passwd
    }
    
    /**
     * Ejecuta el inicio de sesión y retorna la información de una persona
     */
    public static async iniciarSesion(_email: string, _passwd: string) {
        const sujeto = await new DAOPersona().seleccionarUno(_email, CampoBusqueda.EMAIL)
        console.log(sujeto)
        if (sujeto?._passwd != _passwd || !sujeto){
            return null
        }
        return { is_allowed : sujeto.is_allowed, idUsuario : sujeto.id_customer, token_session : sujeto.tokenSession }
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
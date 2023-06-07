import Persona from "./Persona";

class Admin extends Persona {
    protected idAdmin: string
    protected lastLogin: Date
    protected accessLevel: string
    public constructor(
        idPersona: string,
        nombres: string,
        apellidos: string,
        password: string,
        email: string,
        tokenSesion: string,
        idAdmin: string,
        lastLogin: Date,
        accessLevel: string
    ) {
        super(idPersona, nombres, apellidos, password, email, tokenSesion)
        this.idAdmin = idAdmin
        this.lastLogin = lastLogin
        this.accessLevel = accessLevel
    }
    public static crearAdmin() {

    }
    public verInfo() {
        
    }
    public actualizarDatos() {
        
    }
}

export default Admin
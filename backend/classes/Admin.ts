import Persona from "./Persona";

class Admin extends Persona {
    protected id_admin: string
    protected last_login: Date
    protected access_level: string
    public constructor(id_person: string, first_name: string, last_name: string, email: string, passwd: string, token_session: string, id_admin: string, last_login: Date, access_level: string) {
        super(id_person, first_name, last_name, passwd, email, token_session)
        this.id_admin = id_admin
        this.last_login = last_login
        this.access_level = access_level
    }
    public static crearAdmin() {

    }
    public verInfo() {
        
    }
    public actualizarDatos() {
        
    }
}

export default Admin
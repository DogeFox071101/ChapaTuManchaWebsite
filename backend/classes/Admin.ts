import Persona from "./Persona";

class Admin extends Persona {
    protected _id_admin: string
    protected _last_login: Date
    protected _access_level: string
    public constructor(id_person: string, first_name: string, last_name: string, email: string, passwd: string, token_session: string, id_admin: string, last_login: Date, access_level: string) {
        super(id_person, first_name, last_name, passwd, email, token_session)
        this._id_admin = id_admin
        this._last_login = last_login
        this._access_level = access_level
    }
    public get id_admin(): string {
        return this._id_admin
    }
    public get last_login(): Date {
        return this._last_login
    }
    public get accress_level(): string {
        return this._access_level
    }
    public verInfo() {
        
    }
    public actualizarDatos() {
        
    }
}

export default Admin
import Usuario from "./Usuario";

class Admin extends Usuario {
    protected lastLogin: string
    protected accessLevel: string
    constructor(nombres: string, apPaterno: string, apMaterno: string, password: string, email: string, lastLogin: string, accessLevel: string) {
        super(nombres, apPaterno, apMaterno, password, email)
        this.lastLogin = lastLogin
        this.accessLevel = accessLevel
    }
}

export default Admin
import Usuario from "./Usuario";

class Admin extends Usuario {
    protected lastLogin: string
    protected accessLevel: string
}

export default Admin
// import DAOUsuario from "../dao/DAOUsuario"

class Usuario {
    protected idUsuario?: number
    protected nombres: string
    protected apPaterno: string
    protected apMaterno: string
    protected password: string
    protected pwVersion?: number
    protected email: string
    protected tknAcc?: string

    constructor(nombres: string, apPaterno: string, apMaterno: string, password: string, email: string) {
        this.nombres = nombres
        this.apPaterno = apPaterno
        this.apMaterno = apMaterno
        this.password = password
        this.email = email
    }
    
    public static async crearCuenta() {
        
    }
    public static async iniciarSesion() {

    }
    public verInfo() {

    }
    public cambiarPwd() {

    }
    public modificarUsuario() {

    }
    public cerrarSesion() {
        
    }
}

export default Usuario
abstract class Usuario {
    protected idUsuario?: number
    protected nombres: string
    protected apPaterno: string
    protected apMaterno: string
    protected password: string
    protected pwVersion?: number
    protected email: string
    protected tokenSesion?: string
    // Constructor
    public constructor(nombres: string, apPaterno: string, apMaterno: string, password: string, email: string) {
        this.nombres = nombres
        this.apPaterno = apPaterno
        this.apMaterno = apMaterno
        this.password = password
        this.email = email
    }

    

    public abstract verInfo(): string
    public abstract modificarCuenta(): boolean
    public async cerrarSesion() {

    }
    public async iniciarSesion() {

    }
    public async cambiarPassword() {

    }
}

export default Usuario
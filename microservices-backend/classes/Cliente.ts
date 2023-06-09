import Direccion from "../interfaces/Direccion";
import Persona from "./Persona";

class Cliente extends Persona {
    protected idCliente: string
    protected fechaNacimiento: Date
    protected tipoDocumento: string
    protected numDocumento: string
    protected celular: string
    protected direccion: Direccion
    protected isAllowed: boolean
    public constructor(
        idPersona: string,
        nombres: string,
        apellidos: string,
        password: string,
        email: string,
        tokenSesion: string,
        idCliente: string,
        fechaNacimiento: Date,
        tipoDocumento: string,
        numDocumento: string,
        celular: string,
        direccion: Direccion,
        isAllowed: boolean
        ) {
            super(idPersona, nombres, apellidos, password, email, tokenSesion)
            this.idCliente = idCliente
            this.fechaNacimiento = fechaNacimiento
            this.tipoDocumento = tipoDocumento
            this.numDocumento = numDocumento
            this.celular = celular
            this.direccion = direccion
            this.isAllowed = isAllowed
        }
    public static crearCliente() {

    }
    public verInfo() {
        
    }
    public actualizarDatos(): void {
        
    }
    public reservarCancha() {

    }
    public upgradeToArrendatario() {

    }
}

export default Cliente
import Cliente from "./Cliente";
import Direccion from "../interfaces/Direccion";

class Arrendador extends Cliente {
    protected idArrendatario: string
    protected fechaRegistro: Date
    public constructor(apellidos: string, nombres: string, password: string, email: string, celular: string, fechaNacimiento: Date, tipoDocumento: string, numDocumento: string,  direccion: Direccion, idPersona: string, tokenSesion: string, idCliente: string, isAllowed: boolean, idArrendatario: string, fechaRegistro: Date) {
        super(apellidos, nombres, password, email, celular, fechaNacimiento, tipoDocumento, numDocumento, direccion, idPersona, tokenSesion, idCliente, isAllowed)
        this.idArrendatario = idArrendatario
        this.fechaRegistro = fechaRegistro
    }
    public registrarCancha() {

    }
    public actualizarDatos() {
        
    }
    public verInfo() {
        
    }
}

export default Arrendador
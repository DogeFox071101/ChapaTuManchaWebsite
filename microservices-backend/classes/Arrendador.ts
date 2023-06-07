import Cliente from "./Cliente";
import Direccion from "./Direccion";

class Arrendador extends Cliente {
    protected idArrendatario: string
    protected fechaRegistro: Date
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
        isAllowed: boolean,
        idArrendatario: string,
        fechaRegistro: Date
    )  {
        super(idPersona, nombres, apellidos, password, email, tokenSesion, idCliente, fechaNacimiento, tipoDocumento, numDocumento, celular, direccion, isAllowed)
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
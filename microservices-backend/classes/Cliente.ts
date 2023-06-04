import DataNuevoCliente from "../interfaces/DataNuevoCliente";
import Usuario from "./Usuario";

class Cliente extends Usuario {
    protected celular: string
    protected fNacimiento: string
    protected tipoDocumento: string
    protected documento: string
    protected isAllowed?: boolean
    protected favorites?: string
    constructor(nombres: string, apPaterno: string, apMaterno: string, password: string, email: string, celular: string, fNacimiento: string, tipoDocumento: string, documento: string) {
        super(nombres, apPaterno, apMaterno, password, email)
        this.celular = celular
        this.fNacimiento = fNacimiento
        this.tipoDocumento = tipoDocumento
        this.documento = documento
    }
    
    public get getCelular() : string {
        return this.celular
    }
    
    public static crearCuenta(dataCliente: DataNuevoCliente) {
        const nuevoCliente = new Cliente(dataCliente.nombres, dataCliente.apPaterno, dataCliente.apMaterno,dataCliente.password, dataCliente.email,  dataCliente.celular, dataCliente.fNacimiento, dataCliente.tipoDocumento, dataCliente.documento)
        return nuevoCliente
    }
    public modificarCuenta(): boolean {
        return true
    }
    public verInfo(): string {
        return ""
    }

}

export default Cliente
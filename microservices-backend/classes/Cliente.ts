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
}

export default Cliente
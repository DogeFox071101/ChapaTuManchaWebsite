import Usuario from "./Usuario";

class Cliente extends Usuario {
    protected celular: string
    protected fNacimiento: string
    protected documento: string
    protected isAllowed: boolean
    protected favorites: string
    constructor(idUsuario: number, nombres: string, apPaterno: string, apMaterno: string, password: string, email: string, tknAcc: string, celular: string, fNacimiento: string, documento: string, isAllowed: boolean, favorites: string) {
        super(idUsuario, nombres, apPaterno, apMaterno, password, email, tknAcc)
        this.celular = celular
        this.fNacimiento = fNacimiento
        this.documento = documento
        this.isAllowed = isAllowed
        this.favorites = favorites
    }
}

export default Cliente
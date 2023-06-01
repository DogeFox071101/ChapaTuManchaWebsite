import Usuario from "./Usuario";

class Cliente extends Usuario {
    protected celular: string
    protected fNacimiento: string
    protected documento: string
    protected isAllowed: boolean
    protected favorites: string
    
}

export default Cliente
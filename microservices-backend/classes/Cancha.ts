import Arrendador from "./Arrendador"

class Cancha {
    protected idCancha?: number
    protected arrendador: Arrendador
    protected nLocal: string
    protected departamento: string
    protected provincia: string
    protected distrito: string
    constructor(arrendador: Arrendador, nLocal: string, depatramento: string, provincia: string, distrito: string) {
        this.arrendador = arrendador
        this.nLocal = nLocal
        this.departamento = depatramento
        this.provincia = provincia
        this.distrito = distrito
    }
}

export default Cancha
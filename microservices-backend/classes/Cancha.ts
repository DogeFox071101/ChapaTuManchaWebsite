class Cancha {
    protected idCancha: number
    protected nLocal: string
    protected distrito: string
    constructor(idCancha: number, nLocal: string, distrito: string) {
        this.idCancha = idCancha
        this.nLocal = nLocal
        this.distrito = distrito
    }
}

export default Cancha
import Deportes from "../enum/Deportes"
import Arrendador from "./Arrendador"
import Direccion from "./Direccion"

class Cancha {
    protected idCancha: string
    protected nombreLocal: string
    protected arrendador: Arrendador
    protected aforo: number
    protected direccion: Direccion
    protected deportesDisponibles: Deportes[]
    public constructor(
        idCancha: string,
        nombreLocal: string,
        arrendador: Arrendador,
        aforo: number,
        direccion: Direccion,
        deportesDisponibles: Deportes[]
    ) {
        this.idCancha = idCancha
        this.nombreLocal = nombreLocal
        this.arrendador = arrendador
        this.aforo = aforo
        this.direccion = direccion
        this.deportesDisponibles = deportesDisponibles
    }
    public static crearCancha() {

    }
    public verInfo() {
        
    }
}

export default Cancha
import Deportes from "../enums/Deportes"
import Arrendador from "./Arrendador"
import Direccion from "../interfaces/Direccion"

class Cancha {
    protected id_cancha: string
    protected nombreLocal: string
    protected arrendador: Arrendador
    protected aforo: number
    protected direccion: Direccion
    protected deportesDisponibles: Deportes[]
    public constructor(
        id_cancha: string,
        nombreLocal: string,
        arrendador: Arrendador,
        aforo: number,
        direccion: Direccion,
        deportesDisponibles: Deportes[]
    ) {
        this.id_cancha = id_cancha
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
import Deportes from "../enums/Deportes"
import Arrendador from "./Arrendador"
import Direccion from "../interfaces/Direccion"
import Seguridad from "./Seguridad";
import CriteriosCancha from "../interfaces/Cancha";
import DAODireccion from "../dao/DAODireccion";
import DAOCancha from "../dao/DAOCancha";

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
    public static async crearCancha(
        idCancha: string, nombreLocal: string, arrendador: Arrendador, aforo: number, direccion: Direccion, deportesDisponibles: Deportes[]) {
            const criteriosCancha: CriteriosCancha = {
                id_sportfield : Seguridad.generarUUID(),
                id_address: direccion.direccion,
                name_txt: nombreLocal,
                capacity: aforo
            }
            const criteriosDireccion = {
                id_address : Seguridad.generarUUID(),
                address_name : direccion.direccion,
                zip_code : direccion.codigoPostal,
                city : direccion.ciudad,
                county : direccion.provincia,
                state_name : direccion.departamento,
                country : direccion.pais
            }
            await new DAOCancha().insertar(criteriosCancha)
            await new DAODireccion().insertar(criteriosDireccion)
            return new Cancha(idCancha, nombreLocal, arrendador, aforo, direccion, deportesDisponibles);
        }
    public verInfo() {
        
    }
}

export default Cancha
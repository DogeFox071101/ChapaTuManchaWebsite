import Deportes from "../enums/Deportes"
import Arrendador from "./Arrendador"
import Direccion from "../interfaces/Direccion"

class Cancha {
    protected _id_sportfield: string
    protected _arrendador: Arrendador
    protected _direccion: Direccion
    protected _sportfield_name: string
    protected _capacity: number
    //protected _available_sports: Deportes[]

    public get id_sportfield(): string {
        return this._id_sportfield
    }
    public get arrendador(): Arrendador {
        return this._arrendador
    }
    public get direccion(): Direccion {
        return this._direccion
    }
    public get sportfield_name(): string {
        return this._sportfield_name
    }
    public get capacity(): number {
        return this._capacity
    }

    public constructor(id_sportfield: string, arrendador: Arrendador, direccion: Direccion, sportfield_name: string, capacity: number, _available_sports?: Deportes[]) {
        this._id_sportfield = id_sportfield
        this._arrendador = arrendador
        this._direccion = direccion
        this._sportfield_name = sportfield_name
        this._capacity = capacity
        //this._available_sports = available_sports
    }
    public async verInfo() {
        const cancha = { nombre: this._sportfield_name, aforo: this._capacity, direccion: this._direccion };
        return cancha
    }
}

export default Cancha
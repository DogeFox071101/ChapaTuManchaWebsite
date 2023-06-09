import type Cancha from "./Cancha"
import type Usuario from "./Usuario";

class Favorito {
    private _sportfield: Cancha;
    private _user: Usuario;
    private _dateAdded: Date;

	constructor(sportfield: Cancha, user: Usuario, dateAdded: Date) {
		this._sportfield = sportfield;
		this._user = user;
		this._dateAdded = dateAdded;
	}
	
	public get sportfield(): Cancha {
		return this._sportfield;
	}
	public get user(): Usuario {
		return this._user;
	}
	public get dateAdded(): Date {
		return this._dateAdded;
	}
	
	public set sportfield(value: Cancha) {
		this._sportfield = value;
	}
	public set user(value: Usuario) {
		this._user = value;
	}
	public set dateAdded(value: Date) {
		this._dateAdded = value;
	}
    
}
export default Favorito
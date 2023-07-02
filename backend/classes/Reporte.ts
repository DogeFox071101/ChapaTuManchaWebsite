import type Evidence from "../interfaces/Evidence";
import type Cancha from "./Cancha";
import type Usuario from "./Usuario";

class Reporte {
    private _reportId: string;
    private _reportText: string;
    private _evidence: Evidence;
    private _status: string;
	private _afUser: Usuario;
    private _suUser: Usuario;
    private _sportfield: Cancha
	constructor(reportId: string, reportText: string, evidence: Evidence, status: string, afUser: Usuario, suUser: Usuario, sportfield: Cancha) {
		this._reportId = reportId;
		this._reportText = reportText;
		this._evidence = evidence;
		this._status = status;
		this._afUser = afUser;
		this._suUser = suUser;
		this._sportfield = sportfield;
	}
	public get reportId(): string {
		return this._reportId;
	}
	public get reportText(): string {
		return this._reportText;
	}
	public get evidence(): Evidence {
		return this._evidence;
	}
	public get status(): string {
		return this._status;
	}
	public get afUser(): Usuario {
		return this._afUser;
	}
	public get suUser(): Usuario {
		return this._suUser;
	}
	public get sportfield(): Cancha {
		return this._sportfield;
	}
	public set reportId(value: string) {
		this._reportId = value;
	}
	public set reportText(value: string) {
		this._reportText = value;
	}
	public set evidence(value: Evidence) {
		this._evidence = value;
	}
	public set status(value: string) {
		this._status = value;
	}
	public set afUser(value: Usuario) {
		this._afUser = value;
	}
	public set suUser(value: Usuario) {
		this._suUser = value;
	}
	public set sportfield(value: Cancha) {
		this._sportfield = value;
	}

    
}
export default Reporte
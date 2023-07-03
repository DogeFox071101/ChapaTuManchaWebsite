import type Evidence from "../interfaces/Evidence";
import type Cancha from "./Cancha";
import type Usuario from "./Usuario";

class Reporte {
    private _reportId: string;
    private _reportText: string;
    private _evidence: Evidence;
    private _status: string;
    private _user: Usuario;
    private _sportfield: Cancha;

	constructor(reportId: string, reportText: string, evidence: Evidence, status: string, user: Usuario, sportfield: Cancha) {
		this._reportId = reportId;
		this._reportText = reportText;
		this._evidence = evidence;
		this._status = status;
		this._user = user;
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
	public get user(): Usuario {
		return this._user;
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
	public set user(value: Usuario) {
		this._user = value;
	}
	public set sportfield(value: Cancha) {
		this._sportfield = value;
	}


    
}
export default Reporte
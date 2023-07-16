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

    
}
export default Reporte
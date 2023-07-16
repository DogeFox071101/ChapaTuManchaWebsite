import Administrador from "./Administrador";
import Reporte from "./Reporte";
import Usuario from "./Usuario";

class Sancion {
    protected _sanctionId: string;
    protected _judgment: string;
	protected _sanctionStarts: Date;
    protected _sanctionEnds: Date;
    protected _report: Reporte;
    protected _admin: Administrador;

	constructor(sanctionId: string, judgment: string, sanctionStarts: Date, sanctionEnds: Date, report: Reporte, admin: Administrador) {
		this._sanctionId = sanctionId;
		this._judgment = judgment;
		this._sanctionStarts = sanctionStarts;
		this._sanctionEnds = sanctionEnds;
		this._report = report;
		this._admin = admin;
	}
	
	public get sanctionId(): string {
		return this._sanctionId;
	}
	public get judgment(): string {
		return this._judgment;
	}
	public get sanctionStarts(): Date {
		return this._sanctionStarts;
	}
	public get sanctionEnds(): Date {
		return this._sanctionEnds;
	}
	public get report(): Reporte {
		return this._report;
	}
	public get admin(): Administrador {
		return this._admin;
	}
	

}
export default Sancion
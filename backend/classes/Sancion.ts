import Administrador from "./Administrador";
import Reporte from "./Reporte";

class Sancion {
    private _sanctionId: string;
    private _judgment: string;
    private _report: Reporte;
    private _admin: Administrador;
    private _sanctionStarts: Date;
    private _sanctionEnds: Date;
	public constructor(sanctionId: string, judgment: string, report: Reporte, admin: Administrador, sanctionStarts: Date, sanctionEnds: Date) {
		this._sanctionId = sanctionId;
		this._judgment = judgment;
		this._report = report;
		this._admin = admin;
		this._sanctionStarts = sanctionStarts;
		this._sanctionEnds = sanctionEnds;
	}
	public get sanctionId(): string {
		return this._sanctionId;
    }
	public get judgment(): string {
		return this._judgment;
	}
	public get report(): Reporte {
		return this._report;
	}
	public get admin(): Administrador {
		return this._admin;
	}
	public get sanctionStarts(): Date {
		return this._sanctionStarts;
	}
	public get sanctionEnds(): Date {
		return this._sanctionEnds;
	}
	public set sanctionId(value: string) {
		this._sanctionId = value;
	}
	public set judgment(value: string) {
		this._judgment = value;
	}
	public set report(value: Reporte) {
		this._report = value;
	}
	public set admin(value: Administrador) {
		this._admin = value;
	}
	public set sanctionStarts(value: Date) {
		this._sanctionStarts = value;
	}
	public set sanctionEnds(value: Date) {
		this._sanctionEnds = value;
	}
    
}
export default Sancion
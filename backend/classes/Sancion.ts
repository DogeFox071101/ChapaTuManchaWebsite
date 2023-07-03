import Administrador from "./Administrador";
import Reporte from "./Reporte";
import Usuario from "./Usuario";

class Sancion {
    private _sanctionId: string;
    private _judgment: string;
    private _sanctionEnd: Date;
    private _user: Usuario;
    private _report: Reporte;
    private _admin: Administrador;

	constructor(sanctionId: string, judgment: string, sanctionEnd: Date, user: Usuario, report: Reporte, admin: Administrador) {
		this._sanctionId = sanctionId;
		this._judgment = judgment;
		this._sanctionEnd = sanctionEnd;
		this._user = user;
		this._report = report;
		this._admin = admin;
	}
	
	public get sanctionId(): string {
		return this._sanctionId;
	}
	public get judgment(): string {
		return this._judgment;
	}
	public get sanctionEnd(): Date {
		return this._sanctionEnd;
	}
	public get user(): Usuario {
		return this._user;
	}
	public get report(): Reporte {
		return this._report;
	}
	public get admin(): Administrador {
		return this._admin;
	}
	
	public set sanctionId(value: string) {
		this._sanctionId = value;
	}
	public set judgment(value: string) {
		this._judgment = value;
	}
	public set sanctionEnd(value: Date) {
		this._sanctionEnd = value;
	}
	public set user(value: Usuario) {
		this._user = value;
	}
	public set report(value: Reporte) {
		this._report = value;
	}
	public set admin(value: Administrador) {
		this._admin = value;
	}
    
}
export default Sancion
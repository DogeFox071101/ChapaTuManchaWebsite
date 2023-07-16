import AdminsDAO from "../dao/AdminsDAO";
import UsersDAO from "../dao/UsersDAO";
import Reporte from "./Reporte";
import Sancion from "./Sancion";
import Seguridad from "./Seguridad";
import Usuario from "./Usuario";

class Administrador {
	private _adminId: string;
    private _fullName: string;
    private _username: string;
    private _password: string;
    private _accessLevel: number;
    private _documentType: string;
    private _documentNum: number;

	constructor();
	constructor(adminId?: any, fullName?:any, username?: any, password?: any, accessLevel?: any, documentType?: any, documentNum?: any) {
		this._adminId = adminId;
		this._fullName = fullName;
		this._username = username;
		this._password = password;
		this._accessLevel = accessLevel;
		this._documentType = documentType;
		this._documentNum = documentNum;
	}

	public get adminId(): string {
		return this._adminId;
	}
	public get fullName(): string {
		return this._fullName;
	}
	public get username(): string {
		return this._username;
	}
	public get password(): string {
		return this._password;
	}
	public get accessLevel(): number {
		return this._accessLevel;
	}
	public get documentType(): string {
		return this._documentType;
	}
	public get documentNum(): number {
		return this._documentNum;
	}
    
	public async cambiarContraseña(contrasena: string) {
		const preKey = process.env.PW_ACTUAL
		this._password = (await Seguridad.generarServerHash(preKey + contrasena)).newPw
		await new AdminsDAO().actualizar(this)
	}
	public emitirSentencia(juicio: string, fecha_final: Date, usuario: Usuario, reporte: Reporte) {
		new Sancion(Seguridad.generarUUID(), juicio, fecha_final, usuario, reporte, this)
    }
    public eliminarUsuario(usuario: Usuario) {
        new UsersDAO().eliminar(usuario)
    }
}

export default Administrador
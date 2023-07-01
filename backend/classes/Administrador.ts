class Administrador {
    private _adminId: string;
    private _fullName: string;
    private _username: string;
    private _password: string;
    private _accessLevel: number;
    private _documentType: string;
    private _documentNum: number;
	constructor(adminId: string, fullName: string, username: string, password: string, accessLevel: number, documentType: string, documentNum: number) {
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
	public set adminId(value: string) {
		this._adminId = value;
	}
	public set fullName(value: string) {
		this._fullName = value;
	}
	public set username(value: string) {
		this._username = value;
	}
	public set password(value: string) {
		this._password = value;
	}
	public set accessLevel(value: number) {
		this._accessLevel = value;
	}
	public set documentType(value: string) {
		this._documentType = value;
	}
	public set documentNum(value: number) {
		this._documentNum = value;
	}
    
    public verReportes() {

    }
    public emitirSentencia() {

    }
    public eliminarUsuario() {
        
    }
}

export default Administrador
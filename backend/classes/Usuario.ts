import UsersDAO from "../dao/UsersDAO";
import type Address from "../interfaces/Address";
import type Phone from "../interfaces/Phone";
import Favorito from "./Favorito";
import Seguridad from "./Seguridad";

/**
 * Clase Persona
 */
class Usuario {
    protected _userId: string;
    protected _firstName: string;
    protected _lastName: string;
    protected _email: string;
    protected _password: string;
    protected _tokenSession: string;
    protected _dateBirth: Date|null;
    protected _documentType: string|null;
    protected _documentNum: number|null;
    protected _dateRegisterLessor: Date|null;
    protected _paymentMethods: string[]|null;
    protected _address: Address|null;
    protected _phone: Phone|null;

	constructor(userId: string, firstName: string, lastName: string, email: string, password: string, tokenSession: string);
    constructor(userId: string, firstName: string, lastName: string, email: string, password: string, tokenSession: string, dateBirth: Date, documentType: string, documentNum: number, dateRegisterLessor: Date, paymentMethods: string[], address: Address|null, phone: Phone|null)
	constructor(userId: any, firstName?: any, lastName?: any, email?: any, password?: any, tokenSession?: any, dateBirth?: any, documentType?: any, documentNum?: any, dateRegisterLessor?: any, paymentMethods?: any, address?: any, phone?: any) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._tokenSession = tokenSession;
		this._dateBirth = dateBirth;
		this._documentType = documentType;
		this._documentNum = documentNum;
		this._dateRegisterLessor = dateRegisterLessor;
		this._paymentMethods = paymentMethods;
		this._address = address;
		this._phone = phone;
    };
	
	public get userId(): string {
		return this._userId;
    };
	public get firstName(): string {
		return this._firstName;
	};
	public get lastName(): string {
		return this._lastName;
	};
	public get email(): string {
		return this._email;
	};
	public get password(): string {
		return this._password;
	};
	public get tokenSession(): string {
		return this._tokenSession;
	};
	public get phone(): Phone|null {
		return this._phone;
	};
	public get address(): Address|null {
		return this._address;
    };
	public get dateBirth(): Date|null {
		return this._dateBirth;
    };
	public get documentType(): string|null {
		return this._documentType;
	};
	public get documentNum(): number|null {
		return this._documentNum;
	};
	public get dateRegisterLessor(): Date|null {
		return this._dateRegisterLessor;
	};
	public get paymentMethods(): string[]|null {
		return this._paymentMethods;
	};

	public async actualizarTokenSession() {
		this._tokenSession = await Seguridad.generarToken()
		console.log(this._tokenSession)
		await new UsersDAO().actualizarTokenDeSesion(this)
	}
	public async revocarTokenSession() {
		this._tokenSession = ""
		await new UsersDAO().actualizarTokenDeSesion(this)
	}
	public compararTokenSession(token_session: string) {
		if (token_session === this._tokenSession) {
            return true
        }
        else {
            return false
        }
	}
	public verificarArrendador(): boolean {
		if (!this._dateBirth || !this._documentType || !this._documentNum || !this._dateRegisterLessor || !this._paymentMethods || !this._address || !this._phone) {
			return false
		}
		else {
			return true
		}
	}

	public async crearCuenta() {
		await new UsersDAO().insertar(this)
	}
    public async iniciarSesion(password: string){
		if (this._password === password) {
			await this.actualizarTokenSession()
			return {
				id_user: this._userId,
				token_session: this._tokenSession,
				is_allowed: true
			}
		}
		return {
			id_user: null,
			token_session: null,
			is_allowed: false
		}
    };
    public recuperarContrasena(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public cambiarContrasena(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public cerrarSesion(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public registrarCancha(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public modificarDatos(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public reservarCancha(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public valorarCancha(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public marcarFavorito(): Promise<void> {
		throw new Error("Method not implemented");
    };
    public verFavoritos(): Promise<Favorito[]> {
		throw new Error("Method not implemented");
    };
    public desmarcarFavorito(): Promise<void> {
        throw new Error("Method not implemented");
    };
    public reportarCancha(): Promise<void> {
		throw new Error("Method not implemented");
    };
	// NO REALIZABLE --> Requiere modificación del backlog
    // public publicacionCancha(): Promise<void> {
	// 	throw new Error("Method not implemented");
    // };
}

export default Usuario
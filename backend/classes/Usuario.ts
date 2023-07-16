import UsersDAO from "../dao/UsersDAO";
import type Address from "../interfaces/Address";
import type Phone from "../interfaces/Phone";
import Favorito from "./Favorito";

/**
 * Clase Persona
 */
class Usuario {
    private _userId: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _tokenSession: string;
    private _dateBirth: Date;
    private _documentType: string;
    private _documentNum: number;
    private _dateRegisterLessor: Date;
    private _paymentMethods: string[];
    private _address: Address;
    private _phone: Phone;

	constructor(userId: string, firstName: string, lastName: string, email: string, password: string, tokenSession: string);
    constructor(userId: string, firstName: string, lastName: string, email: string, password: string, tokenSession: string, dateBirth: Date, documentType: string, documentNum: number, dateRegisterLessor: Date, paymentMethods: string[], address: Address, phone: Phone)
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
	public get phone(): Phone {
		return this._phone;
	};
	public get address(): Address {
		return this._address;
    };
	public get dateBirth(): Date {
		return this._dateBirth;
    };
	public get documentType(): string {
		return this._documentType;
	};
	public get documentNum(): number {
		return this._documentNum;
	};
	public get dateRegisterLessor(): Date {
		return this._dateRegisterLessor;
	};
	public get paymentMethods(): string[] {
		return this._paymentMethods;
	};
	
	public static inicializarNuevo(userId: string, firstName: string, lastName: string, email: string, password: string, tokenSession: string) {

	}
	public static inicializarExistente(userId: string, firstName: string, lastName: string, email: string, password: string, tokenSession: string, dateBirth: Date|null, documentType: string|null, documentNum: number|null, dateRegisterLessor: Date|null, paymentMethods: string[]|null, address: Address|null, phone: Phone|null) {
		
	}

	public async crearCuenta() {
		new UsersDAO().insertar(this)
	}
    public async inicioSesion(): Promise<boolean> {
		throw new Error("Method not implemented");
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
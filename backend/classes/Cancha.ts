import SportfieldsDAO from "../dao/SportfieldsDAO";
import type Address from "../interfaces/Address";
import type Usuario from "./Usuario";

class Cancha {
    private _sportfieldId: string;
    private _name: string;
    private _description: string;
    private _capacity: number;
    private _price: number;
	private _image: Image;
    private _datePost: Date;
    private _timeStart: string;
    private _timeEnd: string;
    private _user: Usuario;
    private _address: Address;

    constructor(sportfieldId: string, name: string, description: string, capacity: number, price: number, image: Image, datePost: Date, timeStart: string, timeEnd: string, user: Usuario, address: Address){
        this._sportfieldId = sportfieldId
        this._name = name
        this._description = description
        this._capacity = capacity
        this._price = price
		this._image = image
        this._datePost = datePost
        this._timeStart = timeStart
        this._timeEnd = timeEnd
        this._user = user
        this._address = address
    }
	
	public get sportfieldId(): string {
		return this._sportfieldId;
	}
	public get name(): string {
		return this._name;
	}
	public get description(): string {
		return this._description;
	}
	public get capacity(): number {
		return this._capacity;
	}
	public get price(): number {
		return this._price;
	}
	public get image(): Image {
		return this._image;
	}
	public get datePost(): Date {
		return this._datePost;
	}
	public get timeStart(): string {
		return this._timeStart;
	}
	public get timeEnd(): string {
		return this._timeEnd;
	}
	public get user(): Usuario {
		return this._user;
	}
    public get address(): Address {
        return this._address;
    }

	public async crearCancha() {
		new SportfieldsDAO().insertar(this)
	}
}

export default Cancha
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

    public constructor(sportfieldId: string, name: string, description: string, capacity: number, price: number, image: Image, datePost: Date, timeStart: string, timeEnd: string, user: Usuario, address: Address) {
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
	
	public set sportfieldId(value: string) {
		this._sportfieldId = value;
	}
	public set name(value: string) {
		this._name = value;
	}
	public set description(value: string) {
		this._description = value;
	}
	public set capacity(value: number) {
		this._capacity = value;
	}
	public set price(value: number) {
		this._price = value;
	}
	public set image(value: Image) {
		this._image = value;
	}
	public set datePost(value: Date) {
		this._datePost = value;
	}
	public set timeStart(value: string) {
		this._timeStart = value;
	}
	public set timeEnd(value: string) {
		this._timeEnd = value;
	}
	public set user(value: Usuario) {
		this._user = value;
	}
    public set address(value: Address) {
        this._address = value;
    }

	public crearCancha() {
		throw new Error("Method not implemented");
	}
    public verInfo() {
        throw new Error("Method not implemented");
    }
}

export default Cancha
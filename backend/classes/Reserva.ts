import type Cancha from "./Cancha"
import type Usuario from "./Usuario"

class Reserva {
    private _bookingId: string;
    private _dateBooking: Date;
    private _timeStart: string;
    private _timeEnd: string;
    private _sportfield: Cancha;
    private _user: Usuario;
    public constructor(bookingId: string, dateBooking: Date, timeStart: string, timeEnd: string, sportfield: Cancha, user: Usuario) {
        this._bookingId = bookingId
        this._dateBooking = dateBooking
        this._timeStart = timeStart
        this._timeEnd = timeEnd
        this._sportfield = sportfield
        this._user = user
    }
	public get bookingId(): string {
		return this._bookingId;
	}
	public get dateBooking(): Date {
		return this._dateBooking;
	}
	public get timeStart(): string {
		return this._timeStart;
	}
	public get timeEnd(): string {
		return this._timeEnd;
	}
	public get sportfield(): Cancha {
		return this._sportfield;
	}
	public get user(): Usuario {
		return this._user;
	}
	public set bookingId(value: string) {
		this._bookingId = value;
	}
	public set dateBooking(value: Date) {
		this._dateBooking = value;
	}
	public set timeStart(value: string) {
		this._timeStart = value;
	}
	public set timeEnd(value: string) {
		this._timeEnd = value;
	}
	public set sportfield(value: Cancha) {
		this._sportfield = value;
	}
	public set user(value: Usuario) {
		this._user = value;
	}
    
    public verInfo() {
        
    }
}

export default Reserva
import type Cancha from "./Cancha"
import type Usuario from "./Usuario"

class Reserva {
    protected _bookingId: string;
    protected _dateBooking: Date;
    protected _timeStart: string;
    protected _timeEnd: string;
    protected _sportfield: Cancha;
    protected _user: Usuario;

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
	
    public verInfo() {
        throw new Error("Method not implemented");
    }
}

export default Reserva
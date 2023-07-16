import type Cancha from "./Cancha";
import type Usuario from "./Usuario";

class Resena {
    private _reviewId: string;
    private _reviewText: string;
    private _dateReview: Date;
    private _reviewStars: number;
    private _user: Usuario;
    private _sportfield: Cancha;

	constructor(reviewId: string, reviewText: string, dateReview: Date, reviewStars: number, user: Usuario, sportfield: Cancha) {
		this._reviewId = reviewId;
		this._reviewText = reviewText;
		this._dateReview = dateReview;
		this._reviewStars = reviewStars;
		this._user = user;
		this._sportfield = sportfield;
	}
	
	public get reviewId(): string {
		return this._reviewId;
	}
	public get reviewText(): string {
		return this._reviewText;
	}
	public get dateReview(): Date {
		return this._dateReview;
	}
	public get reviewStars(): number {
		return this._reviewStars;
	}
	public get user(): Usuario {
		return this._user;
	}
	public get sportfield(): Cancha {
		return this._sportfield;
	}
	
 
}
export default Resena
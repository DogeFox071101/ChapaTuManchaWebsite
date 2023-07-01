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
	public set reviewId(value: string) {
		this._reviewId = value;
	}
	public set reviewText(value: string) {
		this._reviewText = value;
	}
	public set dateReview(value: Date) {
		this._dateReview = value;
	}
	public set reviewStars(value: number) {
		this._reviewStars = value;
	}
	public set user(value: Usuario) {
		this._user = value;
	}
	public set sportfield(value: Cancha) {
		this._sportfield = value;
	}
    
}
export default Resena
import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Resena from "../classes/Resena"

class ReviewsDAO {
    private database: DB = new PgDB()
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()

    public async insertar(resena: Resena) {
        const query = {
            text: "INSERT INTO reviews (review_id, review_text, date_review, review_stars, user_id, sportfield_id) VALUES ($1, $2, $3, $4, $5, $6)",
            values: [resena.reviewId, resena.reviewText, resena.dateReview, resena.reviewStars, resena.user.userId, resena.sportfield.sportfieldId]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            await this.consulta.execute()
            await this.connection.close()
        }
        catch (error){
            console.error(error)
            await this.connection.close()
        }
    }
    public async seleccionarPorID(reviewId: string) {
        const query = {
            text: "SELECT * FROM reviews WHERE review_id = S1",
            values: [reviewId]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            const res = await this.consulta.execute()
            await this.connection.close()
            return res
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return null
        }
    }
    public async seleccionarPorUsuario(userId: string) {
        const query = {
            text: "SELECT * FROM reviews WHERE user_id = S1",
            values: [userId]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            const res = await this.consulta.execute()
            await this.connection.close()
            return res
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return null
        }
    }
    public async seleccionarPorCancha(sportfieldId: string) {
        const query = {
            text: "SELECT * FROM reviews WHERE sportfield_id = S1",
            values: [sportfieldId]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            const res = await this.consulta.execute()
            await this.connection.close()
            return res
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return null
        }
    }
    public async seleccionarPorEstrellas(reviewStars: number) {
        const query = {
            text: "SELECT * FROM reviews WHERE review_stars = S1",
            values: [reviewStars]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            const res = await this.consulta.execute()
            await this.connection.close()
            return res
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return null
        }
    }
    public async actualizar(resena: Resena) {
        const query = {
            text: "UPDATE reviews SET review_text = $1, date_review = $2, review_stars = $3, user_id = $4, sportfield_id = $5, WHERE review_id = $6",
            values: [resena.reviewText, resena.dateReview, resena.reviewStars, resena.user.userId, resena.sportfield.sportfieldId, resena.reviewId]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            await this.consulta.execute()
            await this.connection.close()
        }
        catch (error){
            console.error(error)
            await this.connection.close()
        }
    }
    public async eliminar(resena: Resena) {
        const query = {
            text: "DELETE FROM reviews WHERE review_id = $1",
            values: [resena.reviewId]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            await this.consulta.execute()
            await this.connection.close()
        }
        catch (error){
            console.error(error)
            await this.connection.close()
        }
    }
}

export default ReviewsDAO
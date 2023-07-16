import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Reserva from "../classes/Reserva"

class BookingsDAO {
    protected database: DB = new PgDB()
    protected connection: Conexion = this.database.getConexion()
    protected consulta: Consulta = this.database.getConsulta()

    public async insertar(reserva: Reserva) {
        const query = {
            text: "INSERT INTO bookings (booking_id, date_booking, time_start, time_end, sportfield_id, user_id) VALUES ($1, $2, $3, $4, $5, $6)",
            values: [reserva.bookingId, reserva.dateBooking, reserva.timeStart, reserva.timeEnd, reserva.sportfield.sportfieldId, reserva.user.userId]
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
    public async seleccionarPorID(bookingId: string) {
        const query = {
            text: "SELECT * FROM bookings WHERE booking_id = S1",
            values: [bookingId]
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
            text: "SELECT * FROM bookings WHERE user_id = S1",
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
            text: "SELECT * FROM bookings WHERE sportfield_id = S1",
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
    public async seleccionarPorArrendador(userId: string) {
        const query = {
            text: "SELECT bookings.* FROM bookings LEFT JOIN ON bookings.sportfield_id = sportfields.sportfield_id WHERE sportfields.user_id = S1",
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
    // TODO --> seleccionarPorRangoDeFecha()
    // public seleccionarPorRangoDeFecha() {
    //     throw new Error("Method not implemented.")
    // }
    public async actualizar(reserva: Reserva) {
        const query = {
            text: "UPDATE bookings SET date_booking = $1, time_start = $2, time_end = $3, sportfield_id = $4, user_id = $5, WHERE booking_id = $6",
            values: [reserva.dateBooking, reserva.timeStart, reserva.timeEnd, reserva.sportfield.sportfieldId, reserva.user.userId]
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
    public async eliminar(reserva: Reserva) {
        const query = {
            text: "DELETE FROM bookings WHERE booking_id = $1",
            values: [reserva.bookingId]
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

export default BookingsDAO
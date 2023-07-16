import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Cancha from "../classes/Cancha"

class SportfieldsDAO {
    protected database: DB = new PgDB()
    protected connection: Conexion = this.database.getConexion()
    protected consulta: Consulta = this.database.getConsulta()

    public async insertar(cancha: Cancha) {
        const query = {
            text: "INSERT INTO sportfields (sportfield_id, name, description, capacity, price, image_uuid, date_post, time_start, time_end, user_id, address_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
            values: [cancha.sportfieldId, cancha.name, cancha.description, cancha.capacity, cancha.price, cancha.image.imageId, cancha.datePost, cancha.timeStart, cancha.timeEnd, cancha.user.userId, cancha.address.addressId]
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
    public async seleccionarPorID(sportfieldId: string) {
        const query = {
            text: "SELECT * FROM sportfields WHERE sportfield_id = $1",
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
    public async seleccionarPorNombre(name: string) {
        const query = {
            text: "SELECT * FROM sportfields WHERE UPPER(name) = $1",
            values: ["%" + name.toUpperCase() + "%"]
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
    public async seleccionarPorDistrito(district: string) {
        const query = {
            text: "SELECT sportfields.* FROM sportfields LEFT JOIN ON sportfield.address_id = addresses.address_id WHERE addresses.address_id = $1",
            values: [district]
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
    public async seleccionarPorCodigoPostal(zipCode: string) {
        const query = {
            text: "SELECT sportfields.* FROM sportfields LEFT JOIN ON sportfield.address_id = addresses.address_id WHERE addresses.zip_code = $1",
            values: [zipCode]
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
    public async actualizar(cancha: Cancha) {
        const query = {
            text: "UPDATE sportfields SET name = $1, description = $2, capacity = $3, price = $4, image_uuid = $5, date_post = $6, time_start = $7, time_end = $8, user_id = $9, address_id = $10,, WHERE sportfield_id = $11",
            values: [cancha.name, cancha.description, cancha.capacity, cancha.price, cancha.image.imageId, cancha.datePost, cancha.timeStart, cancha.timeEnd, cancha.user.userId, cancha.address.addressId, cancha.sportfieldId]
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
    public async eliminar(cancha: Cancha) {
        const query = {
            text: "DELETE FROM sportfields WHERE sportfield_id = $1",
            values: [cancha.sportfieldId]
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

export default SportfieldsDAO
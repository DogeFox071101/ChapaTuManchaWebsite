import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/PgDB"
import type Cancha from "../classes/Cancha"

class DAOSportfields {
    private database: DB = new PgDB()
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()
    public async insertar(cancha: Cancha) {
        const query = {
            text: "INSERT INTO sportfields (sportfield_id, name, description, capacity, price, date_post, time_start, time_end, user_id, address_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            values: [cancha.sportfieldId, cancha.name, cancha.description, cancha.capacity, cancha.price, cancha.datePost, cancha.timeStart, cancha.timeEnd, cancha.user.userId, cancha.address.addressId]
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
            text: "SELECT * FROM "
        }
    }
    public actualizar() {
        throw new Error("Method not implemented.")
    }
    public eliminar() {
        throw new Error("Method not implemented.")
    }
}

export default DAOSportfields
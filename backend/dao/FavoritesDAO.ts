import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Favorito from "../classes/Favorito"

class FavoritesDAO {
    private database: DB = new PgDB()
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()

    public async insertar(favorito: Favorito) {
        const query = {
            text: "INSERT INTO favorites (sportfield_id, user_id, date_added) VALUES ($1, $2, $3)",
            values: [favorito.sportfield.sportfieldId, favorito.user.userId, favorito.dateAdded]
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
    public async seleccionarPorUsuario(userId: string) {
        const query = {
            text: "SELECT * FROM favorites WHERE user_id = S1",
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
            text: "SELECT * FROM favorites WHERE sportfield_id = S1",
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
    public async seleccionarPorUsuarioMasCancha(userId: string, sportfieldId: string) {
        const query = {
            text: "SELECT * FROM favorites WHERE user_id = S1 AND sportfield_id = $2",
            values: [userId, sportfieldId]
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
    public async actualizar() {
        throw new Error("Method not implemented.")
    }
    public async eliminar(favorito: Favorito) {
        const query = {
            text: "DELETE FROM favorites WHERE user_id = $1 AND sportfield_id = $2",
            values: [favorito.user.userId, favorito.sportfield.sportfieldId]
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

export default FavoritesDAO
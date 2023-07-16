import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Sancion from "../classes/Sancion"

class SanctionsDAO {
    protected database: DB = new PgDB()
    protected connection: Conexion = this.database.getConexion()
    protected consulta: Consulta = this.database.getConsulta()

    public async insertar(sancion: Sancion) {
        const query = {
            text: "INSERT INTO sanctions (sanction_id, judgment, sanction_starts, sanction_ends, report_id, admin_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            values: [sancion.sanctionId, sancion.judgment, sancion.sanctionStarts, sancion.sanctionEnds, sancion.report.reportId, sancion.admin.adminId]
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
    public async seleccionarPorID(sanctionId: string) {
        const query = {
            text: "SELECT * FROM sanctions WHERE sanction_id = S1",
            values: [sanctionId]
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
            text: "SELECT * FROM sanctions WHERE user_id = S1",
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
    public async seleccionarPorAdministrador(adminId: string) {
        const query = {
            text: "SELECT * FROM sanctions WHERE admin_id = S1",
            values: [adminId]
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
    public async actualizar(sancion: Sancion) {
        const query = {
            text: "UPDATE sanctions SET judgment = $1, sanction_starts = $2, sanction_ends = $3, report_id = $4, admin_id = $5, WHERE sanction_id = $6",
            values: [sancion.judgment, sancion.sanctionStarts,  sancion.sanctionEnds, sancion.report.reportId, sancion.admin.adminId, sancion.sanctionId]
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
    public async eliminar(sancion: Sancion) {
        const query = {
            text: "DELETE FROM sanctions WHERE sanction_id = $1",
            values: [sancion.sanctionId]
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

export default SanctionsDAO
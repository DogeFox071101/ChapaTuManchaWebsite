import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Reporte from "../classes/Reporte"

class ReportsDAO {
    protected database: DB = new PgDB()
    protected connection: Conexion = this.database.getConexion()
    protected consulta: Consulta = this.database.getConsulta()

    public async insertar(reporte: Reporte) {
        const query = {
            text: "INSERT INTO reports (report_id, report_text, evidence, status, user_id, sportfield_id) VALUES ($1, $2, $3, $4, $5, $6)",
            values: [reporte.reportId, reporte.reportText, reporte.evidence.evidenceId, reporte.status, reporte.user.userId, reporte.sportfield.sportfieldId]
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
    public async seleccionarPorID(reportId: string) {
        const query = {
            text: "SELECT * FROM reports WHERE report_id = S1",
            values: [reportId]
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
    public async seleccionarPorDenunciante(userId: string) {
        const query = {
            text: "SELECT * FROM reports WHERE user_id = S1",
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
            text: "SELECT * FROM reports WHERE sportfield_id = S1",
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
    public async seleccionarPorAcusado(userId: string) {
        const query = {
            text: "SELECT reports.* FROM reports LEFT JOIN ON reports.sportfield_id = sportfields.sportfield_id WHERE sportfields.user_id = S1",
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
    public async actualizar(reporte: Reporte) {
        const query = {
            text: "UPDATE reports SET report_text = $1, evidence = $2, status = $3, user_id = $4, sportfield_id = $5, WHERE report_id = $6",
            values: [reporte.reportText, reporte.evidence.evidenceId, reporte.status, reporte.user.userId, reporte.sportfield.sportfieldId, reporte.reportId]
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
    public async eliminar(reporte: Reporte) {
        const query = {
            text: "DELETE FROM reports WHERE report_id = $1",
            values: [reporte.reportId]
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

export default ReportsDAO
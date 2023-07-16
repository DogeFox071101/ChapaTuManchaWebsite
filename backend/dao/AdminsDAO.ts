import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB";
import type Administrador from "../classes/Administrador";

class AdminsDAO {
    protected database: DB = new PgDB()
    protected connection: Conexion = this.database.getConexion()
    protected consulta: Consulta = this.database.getConsulta()
    
    public async insertar(admin: Administrador) {
        const query = {
            text: "INSERT INTO admins (admin_id, full_name, username, password, access_level, document_type, document_num) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            values: [admin.adminId, admin.fullName, admin.username, admin.password, admin.accessLevel, admin.documentType, admin.documentNum]
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
    public async seleccionarPorID(adminId: string) {
        const query = {
            text: "SELECT * FROM admins WHERE admin_id = S1",
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
    public async actualizar(admin: Administrador) {
        const query = {
            text: "UPDATE admins SET full_name = $1, username = $2, password = $3, access_level = $4, document_type = $5, document_num = $6, WHERE admin_id = $7",
            values: [admin.fullName, admin.username, admin.password, admin.accessLevel, admin.documentType, admin.documentNum, admin.adminId]
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
    public async eliminar(admin: Administrador) {
        const query = {
            text: "DELETE FROM admins WHERE admin_id = $1",
            values: [admin.adminId]
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

export default AdminsDAO
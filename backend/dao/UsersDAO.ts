import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Usuario from "../classes/Usuario"

class UsersDAO {
    private database: DB = new PgDB()
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()

    public async insertar(usuario: Usuario) {
        const query = {
            text: "INSERT INTO users(user_id, first_name, last_name, email, password, token_session, phone_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            values: [usuario.userId, usuario.firstName, usuario.lastName, usuario.email, usuario.password, usuario.tokenSession, usuario.phone.phoneId]
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
    public async seleccionarTodo() {
        const query = {
            text: "SELECT * FROM users"
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
    public async seleccionarPorID(userId: string) {
        const query = {
            text: "SELECT * FROM users WHERE user_id = $1",
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
    public async seleccionarPorNombre(firstName: string) {
        const query = {
            text: "SELECT * FROM users WHERE UPPER(first_name) LIKE $1",
            values: ["%" + firstName.toUpperCase() + "%"]
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
    public async seleccionarPorCorreo(email: string) {
        const query = {
            text: "SELECT * FROM users WHERE email = $1",
            values: [email]
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
    public async seleccionarPorApellido(lastName: string) {
        const query = {
            text: "SELECT * FROM users WHERE UPPER(last_name) LIKE $1",
            values: ["%" + lastName.toUpperCase() + "%"]
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
    public async seleccionarPorDocumento(documentType: string, documentNum: number) {
        const query = {
            text: "SELECT * FROM users WHERE document_type = $1 AND document_num = $2",
            values: [documentType, documentNum]
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
    public async seleccionarPorCodigoPostal(zipCode: number) {
        const query = {
            text: "SELECT users.* FROM users LEFT JOIN ON users.address_id = addresses.address_id WHERE addresses.zip_code = $1",
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
    // --> TODO -> seleccionarPorCoordenadas()
    // public async seleccionarPorCoordenadas(coord_x: number, coord_y: number) {
    //     const query = {
    //         text: "SELECT users.* FROM users LEFT JOIN ON users.address_id = addresses.address_id WHERE addresses.coord_x = $1",
    //         values: [zipCode]
    //     }
    //     try {
    //         await this.connection.open()
    //         this.consulta.set(query)
    //         await this.consulta.execute()
    //         await this.connection.close()
    //     }
    //     catch (error){
    //         console.error(error)
    //         await this.connection.close()
    //     }
    // }
    public async actualizarNombres(usuario: Usuario) {
        const query = {
            text: "UPDATE users SET first_name = $1, last_name = $2 WHERE user_id = $3",
            values: [usuario.firstName, usuario.lastName, usuario.userId]
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
    public async actualizarContrasena(usuario: Usuario) {
        const query = {
            text: "UPDATE users SET password = $1 WHERE user_id = $2",
            values: [usuario.password, usuario.userId]
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
    public async actualizarTokenDeSesion(usuario: Usuario) {
        const query = {
            text: "UPDATE users SET token_session = $1 WHERE user_id = $2",
            values: [usuario.tokenSession, usuario.userId]
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
    public async actualizarFechaNacimiento(usuario: Usuario) {
        const query = {
            text: "UPDATE users SET date_birth = $1 WHERE user_id = $2",
            values: [usuario.dateBirth, usuario.userId]
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
    public async actualizarDocumentoIdentidad(usuario: Usuario) {
        const query = {
            text: "UPDATE users SET document_type = $1, document_num = $2 WHERE user_id = $3",
            values: [usuario.documentType, usuario.documentNum, usuario.userId]
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
    public async actualizarRegistroArrendatario(usuario: Usuario) {
        const query = {
            text: "UPDATE users SET date_register_as_lessor = $1 WHERE user_id = $2",
            values: [usuario.dateRegisterLessor, usuario.userId]
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
    public async actualizarMetodosDePago(usuario: Usuario) {
        const query = {
            text: "UPDATE users SET payment_methods = $1 WHERE user_id = $2",
            values: [usuario.paymentMethods, usuario.userId]
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
    public async eliminar(usuario: Usuario) {
        const query = {
            text: "DELETE FROM users WHERE user_id = $1'",
            values: [usuario.userId]
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

export default UsersDAO
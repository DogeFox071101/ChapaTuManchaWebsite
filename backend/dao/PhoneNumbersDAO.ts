import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Phone from "../interfaces/Phone"

class PhoneNumbersDAO {
    protected database: DB = new PgDB()
    protected connection: Conexion = this.database.getConexion()
    protected consulta: Consulta = this.database.getConsulta()
    
    protected async mapArrayToClassArray(rows: any[]) {
        const lista_telefonos = new Array<Phone>
        for (const lista of rows) {
            const phone: Phone = {
                phoneId : lista.phone_id,
                prefix : lista.prefix,
                number : lista.number,
                country : lista.country,
                isFixed : lista.is_fixed
            }
            lista_telefonos.push(phone)
        }
        return lista_telefonos
    }

    public async insertar(phone: Phone) {
        const query = {
            text: "INSERT INTO phone_numbers(phone_id, prefix, number, country, is_fixed) VALUES ($1, $2, $3, $4, $5)",
            values: [phone.phoneId, phone.prefix, phone.number, phone.country, phone.isFixed]
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
    public async seleccionarPorID(phoneId: string) {
        const query = {
            text: "SELECT * FROM phone_numbers WHERE phone_id = $1",
            values: [phoneId]
        }
        try {
            await this.connection.open()
            this.consulta.set(query)
            const res = await this.consulta.execute()
            await this.connection.close()
            return this.mapArrayToClassArray(res.rows)
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return null
        }
    }
    public async actualizarTelefono(phone: Phone) {
        const query = {
            text: "UPDATE phone_numbers SET prefix = $1, number = $2, country = $3, is_fixed = $4 WHERE phone_id = $5",
            values: [phone.prefix, phone.number, phone.country, phone.isFixed, phone.phoneId]
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
    public async eliminar(phone: Phone) {
        const query = {
            text: "DELETE FROM phone_numbers WHERE phone_id = $1",
            values: [phone.phoneId]
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
export default PhoneNumbersDAO
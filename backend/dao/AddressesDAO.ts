import type DB from "../database/DB"
import type Conexion from "../database/Conexion"
import type Consulta from "../database/Consulta"
import PgDB from "../database/postgres/PgDB"
import type Address from "../interfaces/Address"

class AddressesDAO {
    protected database: DB = new PgDB()
    protected connection: Conexion = this.database.getConexion()
    protected consulta: Consulta = this.database.getConsulta()
    
    protected async mapArrayToClassArray(rows: any[]) {
        const lista_direcciones = new Array<Address>
        for (const lista of rows) {
            const address: Address = {
                addressId : lista.address_id,
                addressExt : lista.address_ext,
                addressLine : lista.address_line,
                doorNumber : lista.door_number,
                zipCode : lista.zip_code,
                district : lista.district,
                city : lista.city,
                state : lista.state,
                country : lista.country,
                coord_x : lista.coord_x,
                coord_y : lista.coord_y
            }
            lista_direcciones.push(address)
        }
        return lista_direcciones
    }

    public async insertar(address: Address) {
        const query = {
            text: "INSERT INTO addresses(address_id, address_line, door_number, zip_code, district, city, state, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            values: [address.addressId, address.addressLine, address.doorNumber, address.zipCode, address.district, address.city, address.state, address.country]
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
    public async seleccionarPorID(addressId: string) {
        const query = {
            text: "SELECT * FROM addresses WHERE address_id = $1",
            values: [addressId]
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
    public async actualizarDireccion(address: Address) {
        const query = {
            text: "UPDATE addresses SET address_line = $1, address_ext = $2, door_number = $3, zip_code = $4, district = $5, city = $6, state = $7, country = $8 WHERE address_id = $9",
            values: [address.addressLine, address.addressExt, address.doorNumber, address.zipCode, address.district, address.city, address.state, address.country, address.addressId]
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
    public async actualizarCoordenadas(address: Address) {
        const query = {
            text: "UPDATE addresses SET coord_x = $1, coord_y = $2 WHERE address_id = $3",
            values: [address.coord_x, address.coord_y, address.addressId]
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
    public async eliminar(address: Address) {
        const query = {
            text: "DELETE FROM addresses WHERE address_id = $1",
            values: [address.addressId]
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
export default AddressesDAO
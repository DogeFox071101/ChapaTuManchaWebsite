import Cliente from "../classes/Cliente"
import DB from "../database/DB"
import PgDB from "../database/PgDB"
import CampoBusqueda from "../enums/CampoBusqueda"
import Direccion from "../interfaces/Direccion"
import DAO from "./DAO"

class DAOPersona extends DAO {
    private database: DB = new PgDB()
    private connection = this.database.getConexion()
    private consulta = this.database.getConsulta()

    public async insertar(criterios: any) {
        const query = `INSERT INTO person VALUES('${criterios.id_person}', '${criterios.first_name}', '${criterios.last_name}', '${criterios.email}', '${criterios.passwd}', '${criterios.token_session}');`
        try {
            await this.connection.open()
            this.consulta.set(query)
            await this.consulta.execute()
            await this.connection.close()
        }
        catch (error) {
            console.error(error)
            await this.connection.close()
        }
    }
    public async seleccionarUno(criterio: string, campoBusqueda: CampoBusqueda) {
        const query = `SELECT person.*, admins.*, customer.*, lessor.*, addresses.* FROM person FULL OUTER JOIN customer ON person.id_person = customer.id_person FULL OUTER JOIN admins ON admins.id_person = person.id_person FULL OUTER JOIN lessor ON customer.id_customer = lessor.id_customer FULL OUTER JOIN addresses ON addresses.id_address = customer.id_address WHERE ${campoBusqueda} = '${criterio}';`
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            const data = solicitud.rows[0]
            if (data.id_admin) {
                return undefined
            }
            const direccion : Direccion = { direccion : data.address_name, ciudad : data.city, provincia : data.county, departamento : data.state_name, pais : data.country, codigoPostal : data.zip_code }
            if (data.id_lessor) {
                return undefined
            }
            return new Cliente(data.id_person, data.first_name, data.last_name, data.email, data.passwd, data.token_session, data.id_customer, data.phone, data.date_birth, data.document_type, data.document_num, data.is_allowed, direccion)
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return undefined
        }
    }
    public async seleccionarLista() {
        throw new Error("Method not implemented.");
    }
    public async seleccionarTodos() {
        const query = "SELECT * FROM persona;"
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            return solicitud.rows
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return new Array<any>()
        }
    }
    public async actualizar() {
        throw new Error("Method not implemented.");
    }
    public async eliminar() {
        throw new Error("Method not implemented.");
    }
}

export default DAOPersona
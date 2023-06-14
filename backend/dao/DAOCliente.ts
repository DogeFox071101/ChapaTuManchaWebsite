import Cliente from "../classes/Cliente";
import Conexion from "../database/Conexion";
import Consulta from "../database/Consulta";
import DB from "../database/DB";
import PgDB from "../database/PgDB";
import CampoBusqueda from "../enums/CampoBusqueda";
import DAO from "./DAO";

class DAOCliente extends DAO{
    private database: DB = new PgDB
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()

    public async insertar(criterios: any) {
        const query = `INSERT INTO customer VALUES ('${criterios.id_customer}', '${criterios.id_person}', '${criterios.id_address}', '${criterios.phone}', '${criterios.date_birth}', '${criterios.document_type}', '${criterios.document_num}', '${criterios.is_allowed}')`
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
        const query = `SELECT person.*, customer.* FROM customer FULL OUTER JOIN person ON customer.id_person = person.id_person WHERE ${campoBusqueda} = '${criterio}';`
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            const data = solicitud.rows[0]
            // {
            //     [1]   id_person: 'c88925f6-881b-4ba3-9864-0ad451ea7992',
            //     [1]   first_name: 'Leonardo Guillermo',
            //     [1]   last_name: 'Falcón Choque',
            //     [1]   email: 'lgfalconch@hotmail.com',
            //     [1]   passwd: '530375acc26fb4ff98a515aa7fce97749becfdd393d8b98c2c05b403c368742a44e795afb61a5cbc12b8a217a8413e4c58175a266c9abd52fc75f3e99bd15508',
            //     [1]   token_session: '6218089c06107c0c23bf48e1ac20b392bbee02dc4973b2813ad6ecbdd4622dd596d99c46315b1ac0c438ed125ec051bbe0d38f5ee1b6a1fabeee9320204bcf57',
            //     [1]   id_customer: '20ffe4e6-5d0e-4e40-a497-e5d911b95b4b',
            //     [1]   id_address: 'a07cde5d-065c-46ef-9b6b-2582f85ff1f6',
            //     [1]   phone: '964215941',
            //     [1]   date_birth: 2001-10-02T05:00:00.000Z,
            //     [1]   document_type: 'DNI',
            //     [1]   document_num: '71793236',
            //     [1]   is_allowed: true
            //     [1] }
            return new Cliente(data.last_name, data.first_name, data.passwd, data.email, data.phone, data.date_birth, data.document_type, data.document_num, data.id_address, data.id_person, data.token_session, data.id_customer, data.is_allowed)
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return undefined
        }
    }
    public seleccionarLista(_criterio: string, _campoBusqueda: CampoBusqueda) {
        throw new Error("Method not implemented.");
    }
    public seleccionarTodos() {
        throw new Error("Method not implemented.");
    }
    public actualizar() {
        throw new Error("Method not implemented.");
    }
    public eliminar() {
        throw new Error("Method not implemented.");
    }
    
}

export default DAOCliente
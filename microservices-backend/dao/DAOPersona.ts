import DB from "../database/DB"
import PgDB from "../database/PgDB"
import CampoBusqueda from "../enum/Consultas"

class DAOPersona {
    database: DB = new PgDB()
    connection = this.database.getConexion()
    consulta = this.database.getConsulta()
    
    public async pruebaDeLectura() {
        try {
            await this.connection.open()
            this.consulta.set("select id_person from person;")
            const result = await this.consulta.execute()
            await this.connection.close()
            console.log(result.rows[0]);
            console.log("Query ejecutado correctamente");
            return true
        }
        catch (error) {
            console.error(error);
            await this.connection.close()
            return false
        }
    }
    public async insertarPersona() {
        // INSERT INTO Usuarios VALUES()
    }
    public async seleccionarPersona(campoConsulta: string, campoBusqueda: CampoBusqueda) {
        if (campoBusqueda == CampoBusqueda.ID_PERSONA) {
            
        }
        
        const query = `SELECT * FROM person WHERE ${campoConsulta} = '${campoConsulta}';`
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            return solicitud.rows[0]
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return {}
        }
    }
    public async seleccionarListaPersonas() {
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
    public async actualizarPersona() {
        // UPDATE Usuarios SET ## WHERE ##
    }
    public async eliminarPersona() {
        // DELETE Usuarios WHERE ##
    }
}

export default DAOPersona
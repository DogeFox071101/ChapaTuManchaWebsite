import Conexion from "../database/Conexion";
import Consulta from "../database/Consulta";
import DB from "../database/DB";
import PgDB from "../database/PgDB";
import DAO from "./DAO";


class DAOCancha extends DAO {
    private database: DB = new PgDB
    private connection: Conexion = this.database.getConexion()
    private consulta: Consulta = this.database.getConsulta()

    public async insertar(criterios: any) {
        const query = `INSERT INTO sportfield VALUES ('${criterios.id_sportfield}', '${criterios.id_address}', '${criterios.name_txt}', '${criterios.capacity}')`
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
    public async seleccionarUno(criterio: string) {
        const query = `SELECT name_txt.*, capacity.* FROM sportfield FULL OUTER JOIN addresses ON sportfield.id_address = addresses.id_address WHERE id_sportfield = '${criterio}';`
        try {
            await this.connection.open()
            this.consulta.set(query)
            const solicitud = await this.consulta.execute()
            await this.connection.close()
            const data = solicitud.rows[0]
            const cancha = {idcancha : data.id_sportfield, id_address : data.id_address,nombreLocal : data.name_txt, capcidad : data.capacity}
            return cancha
        }
        catch (error){
            console.error(error)
            await this.connection.close()
            return undefined
        }
    }
    public async seleccionarLista(criterio: string) {
        const query = `SELECT name_txt.*, capacity.* FROM sportfield FULL OUTER JOIN addresses ON sportfield.id_address = addresses.id_address WHERE adress.zip_code = '${criterio}';`
        try {
            await this.connection.open();
            this.consulta.set(query);
            const solicitud = await this.consulta.execute();
            await this.connection.close();
            const data = solicitud.rows;
            const canchas = data.map((row: any) => ({
                idCancha: row.id_sportfield,
                idAddress: row.id_address,
                nombreLocal: row.name_txt,
                capacidad: row.capacity,
            }));
            return canchas;
            //probar en la nube - frontend :3
        } catch (error) {
            console.error(error);
            await this.connection.close();
            return undefined;
        }
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

export default DAOCancha
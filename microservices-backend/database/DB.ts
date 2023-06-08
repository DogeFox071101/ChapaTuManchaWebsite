import Conexion from "./Conexion";
import Consulta from "./Consulta";

abstract class DB {
    public abstract getConexion(): Conexion
    public abstract getConsulta(): Consulta
}

export default DB
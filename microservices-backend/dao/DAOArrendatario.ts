import CampoBusqueda from "../enums/CampoBusqueda";
import DAO from "./DAO";

class DAOArrendador extends DAO {
    public insertar() {
        throw new Error("Method not implemented.");
    }
    public seleccionarUno(_criterio: string, _campoBusqueda: CampoBusqueda) {
        throw new Error("Method not implemented.");
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

export default DAOArrendador
import CampoBusqueda from "../enums/CampoBusqueda";

abstract class DAO {
    public abstract insertar(_criterios: any): any
    public abstract seleccionarUno(_criterio: string, _campoBusqueda: CampoBusqueda): any
    public abstract seleccionarLista(_criterio: string, _campoBusqueda: CampoBusqueda): any
    public abstract seleccionarTodos(): any
    public abstract actualizar(): any
    public abstract eliminar(): any
}

export default DAO
import CampoBusqueda from "../enums/CampoBusqueda";

abstract class DAO {
    public abstract insertar(criterios: any): any
    public abstract seleccionarUno(criterio: string, campoBusqueda: CampoBusqueda): any
    public abstract seleccionarLista(criterio: string, campoBusqueda: CampoBusqueda): any
    public abstract seleccionarTodos(): any
    public abstract actualizar(): any
    public abstract eliminar(): any
}

export default DAO
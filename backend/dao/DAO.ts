import CamposBD from "../enums/CamposBD";

abstract class DAO {
    public abstract insertar(_criterios: any): any
    public abstract seleccionarUno(_criterio: string, _campoBusqueda: CamposBD, _contexto: CamposBD): any
    public abstract seleccionarLista(_criterio: string, _campoBusqueda: CamposBD): any
    public abstract seleccionarTodos(): any
    public abstract actualizar(_criterio: string, _campoBusqueda: CamposBD, _contextoBusqueda: CamposBD, _valor: string, _campoActualizar: CamposBD, _contextoActualizar: CamposBD): any
    public abstract eliminar(): any
}

export default DAO
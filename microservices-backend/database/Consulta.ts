abstract class Consulta {
    public abstract set(_text : string): void
    public abstract execute(): any
}

export default Consulta
abstract class Consulta {
    public abstract set(_input : any): void
    public abstract execute(): Promise<any>
}

export default Consulta
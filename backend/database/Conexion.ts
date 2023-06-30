abstract class Conexion {
    public abstract open(): Promise<void>
    public abstract close(): Promise<void>
}

export default Conexion
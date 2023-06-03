import DataNuevoUsuario from "./DataNuevoUsuario";

interface DataNuevoCliente extends DataNuevoUsuario {
    celular: string,
    fNacimiento: string,
    tipoDocumento: string,
    documento: string
}

export default DataNuevoCliente
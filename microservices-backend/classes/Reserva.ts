import Cancha from "./Cancha"
import Cliente from "./Cliente"

class Reserva {
    protected idReserva?: number
    protected cliente: Cliente
    protected cancha: Cancha

    constructor(cliente: Cliente, cancha: Cancha) {
        this.cliente = cliente
        this.cancha = cancha
    }
}

export default Reserva
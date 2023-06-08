import Cancha from "./Cancha"
import Cliente from "./Cliente"

class Reserva {
    protected idReserva: string
    protected fechaReserva: Date
    protected horaInicio: Date
    protected horaFin: Date
    protected cliente: Cliente
    protected cancha: Cancha

    constructor(
        idReserva: string,
        fechaReserva: Date,
        horaInicio: Date,
        horaFin: Date,
        cliente: Cliente,
        cancha: Cancha
    ) {
        this.idReserva = idReserva
        this.fechaReserva = fechaReserva
        this.horaInicio = horaInicio
        this.horaFin = horaFin
        this.cliente = cliente
        this.cancha = cancha
    }
    public static crearReserva() {

    }
    public cancelarReserva() {
        
    }
}

export default Reserva
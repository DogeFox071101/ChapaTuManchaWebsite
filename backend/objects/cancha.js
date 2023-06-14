'use strict';
import dao_cancha from '../dao/cancha.js';

class Cancha {
    id_cancha
    id_usuario
    aforo
    tipo
    nombre_local
    ubicacion
    
    constructor (id_cancha, id_usuario, aforo, tipo, nombre_local, ubicacion) {
        this.id_cancha = id_cancha
        this.id_usuario = id_usuario
        this.aforo = aforo
        this.tipo = tipo
        this.nombre_local = nombre_local
        this.ubicacion = ubicacion
    }

    get id_cancha() { return this.id_cancha }
    set id_cancha(id_cancha) { this.id_cancha = id_cancha }

    get id_usuario() { return this.id_usuario }
    set id_usuario(id_usuario) { this.id_usuario = id_usuario }

    get aforo() { return this.aforo }
    set aforo(aforo) { this.aforo = aforo }

    get tipo() { return this.tipo }
    set tipo(tipo) { this.tipo = tipo }

    get nombre_local() { return this.nombre_local }
    set nombre_local(nombre_local) { this.nombre_local = nombre_local }

    get ubicacion() { return this.ubicacion }
    set ubicacion(ubicacion) { this.ubicacion = ubicacion }

    get documento() { return this.documento }
    set documento(documento) { this.documento = documento }

    get celular() { return this.celular }
    set celular(celular) { this.celular = celular }

    async crear_cancha() {
        const cancha = {
            id_cancha : this.id_cancha,
            id_usuario : this.id_usuario,
            aforo : this.aforo,
            tipo : this.tipo,
            nombre_local : this.nombre_local,
            ubicacion : this.ubicacion
        }
        const data = await dao_cancha.insert_cancha(cancha)
        this.id_cancha = data.dataValues.id
        return { id_cancha : this.id_cancha }
    }
}
export default Cancha
'use strict';
const dao_usuario = require ('../dao/usuario');
const Cancha = require('./cancha');

class Usuario {
    id_usuario
    nombre
    correo
    passwd
    arrendador
    documento
    celular

    constructor (id_usuario, nombre, correo, passwd, arrendador, documento, celular) {
        this.id_usuario = id_usuario
        this.nombre = nombre
        this.correo = correo
        this.passwd = passwd
        this.arrendador = arrendador
        this.documento = documento
        this.celular = celular
    }

    get id_usuario() { return this.id_usuario }
    set id_usuario(id_usuario) { this.id_usuario = id_usuario }

    get nombre() { return this.nombre }
    set nombre(nombre) { this.nombre = nombre }

    get correo() { return this.correo }
    set correo(correo) { this.correo = correo }

    get passwd() { return this.passwd }
    set passwd(password) { this.passwd = password }

    get arrendador() { return this.arrendador }
    set arrendador(arrendador) { this.arrendador = arrendador }

    get documento() { return this.documento }
    set documento(documento) { this.documento = documento }

    get celular() { return this.celular }
    set celular(celular) { this.celular = celular }

    async crear_cuenta() {
        const usuario = {
            id_usuario : this.id_usuario,
            nombre : this.nombre,
            correo : this.correo,
            passwd : this.passwd,
            arrendador : this.arrendador,
            documento : this.documento,
            celular : this.celular
        }
        const data = await dao_usuario.insert_usuario(usuario)
        this.id_usuario = data.dataValues.id
        return { id_usuario : this.id_usuario }
    }
    async iniciar_sesion() {
        const data = await dao_usuario.login_usuario(this.correo, this.passwd)
        if(data != null) {
            return { id_usuario : data.id }
        }
        else {
            return -1
        }
    }
    async recuperar_cuenta() {
        const data = await dao_usuario.select_usuario_correo(this.correo)
        if(data != null) {
            // enviar un correo de recuperación con un código
            return 1
        }
        else {
            return -1
        }
    }
    async cambiar_contraseña(n_passwd) {
        const data = await dao_usuario.select_usuario(this.id_usuario)
        if (data.passwd == this.passwd) {
            data.passwd = n_passwd
            dao_usuario.update_usuario(data)
            return 0
        }
        return -1
    }
    async registrar_cancha(datos_cancha) {
        const cancha = new Cancha(null, datos_cancha.id_usuario, datos_cancha, datos.tipo, datos.nombre_local, datos.ubicacion)
        const salida = cancha.crear_cancha()
        return salida
    }
};

module.exports = Usuario;

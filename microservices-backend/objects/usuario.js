'use strict';
var dao_usuario = require ('../dao/usuario')

class Usuario {
    id_usuario
    nombre
    correo
    passwd
    arrendador
    documento
    celular
    usuario

    constructor (id_usuario, nombre, correo, passwd, arrendador, documento, celular) {
        this.id_usuario = id_usuario
        this.nombre = nombre
        this.correo = correo
        this.passwd = passwd
        this.arrendador = arrendador
        this.documento = documento
        this.celular = celular
        this.usuario = {
            id_usuario : this.id_usuario,
            nombre : this.nombre,
            correo : this.correo,
            passwd : this.passwd,
            arrendador : this.arrendador,
            documento : this.documento,
            celular : this.celular
        }
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

    refresh_object() {
        this.usuario = {
            id_usuario : this.id_usuario,
            nombre : this.nombre,
            correo : this.correo,
            passwd : this.passwd,
            arrendador : this.arrendador,
            documento : this.documento,
            celular : this.celular
        }
    }

    async crear_cuenta() {
        const data = await dao_usuario.insert_usuario(this.usuario)
        this.id_usuario = data.dataValues.id
        const response = {
            id_usuario : this.id_usuario
        }
        this.refresh_object()
        return response
    }
    async iniciar_sesion() {
        const data = await dao_usuario.login_usuario(this.correo, this.passwd)
        if(data != null) {
            const response = {
                id_usuario : data.id
            }
            this.refresh_object()
            return response
        }
        else {
            return -1
        }
    }
    async recuperar_cuenta() {

    }
    async cambiar_contraseña() {

    }
    async modificar_datos() {

    }
};

module.exports = Usuario;

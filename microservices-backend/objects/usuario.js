'use strict';
var dao_usuario = require ('../dao/usuario')

class Usuario {
    id_usuario
    nombre
    correo
    passwd
    documento
    celular

    constructor (id_usuario, nombre, correo, passwd, documento, celular) {
        this.id_usuario = id_usuario
        this.nombre = nombre
        this.correo = correo
        this.passwd = passwd
        this.documento = documento
        this.celular = celular
    }

    get id_usuario() {
        return this.id_usuario;
    }
    set id_usuario(id_usuario) {
        this.id_usuario = id_usuario;
    }
    get nombre() {
        return this.nombre;
    }
    set nombre(nombre) {
        this.nombre = nombre;
    }
    get correo() {
        return this.correo;
    }
    set correo(correo) {
        this.correo = correo;
    }
    get passwd() {
        return this.passwd;
    }
    set passwd(password) {
        this.passwd = password;
    }
    get documento() {
        return this.documento;
    }
    set documento(documento) {
        this.documento = documento;
    }
    get celular() {
        return this.celular;
    }
    set celular(celular) {
        this.celular = celular;
    }
    async crear_cuenta() {
        confirm = dao_usuario.insert_usuario()
    }
    async iniciar_sesion() {

    }
    async recuperar_cuenta() {

    }
    async cambiar_contraseña() {

    }
    async modificar_datos() {

    }
};

module.exports = Usuario;

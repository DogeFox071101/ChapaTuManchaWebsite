const db = require ('../sequelize/models')

const insert_usuario = async (usuario) => {
    const nuevo_usuario = await db.Usuarios.create({
        nombre : usuario.nombre,
        correo : usuario.correo,
        passwd : usuario.passwd,
        arrendador : usuario.arrendador,
        documento : usuario.documento,
        celular : usuario.celular
    })
    console.log(usuario.passwd)
    return nuevo_usuario
}
const login_usuario = async (correo, passwd) => {
    return await db.Usuarios.findOne({
        where : {
            correo : correo,
            passwd : passwd
        }
    })
}
const select_usuario_nombre = async (nombre) => {
    return await db.Usuarios.findOne({
        where : {
            nombre : nombre
        }
    })
}
const select_usuario_correo = async (correo) => {
    return await db.Usuarios.findOne({
        where : {
            correo : correo
        }
    })
}
const select_usuario_documento = async (documento) => {
    return await db.Usuarios.findOne({
        where : {
            documento : documento
        }
    })
}
const select_usuario_celular = async (celular) => {
    return await db.Usuarios.findOne({
        where : {
            celular : celular
        }
    })
}
const select_usuarios = async () => {
    return await db.Usuarios.findAll({
        order : [
            [ 'nombre', 'DESC' ]
        ]
    })
}
const update_usuario = async (usuario) => {
    const actualizar_dato = await select_usuario(usuario.id_usuario);
    actualizar_dato.nombre = usuario.nombre;
    actualizar_dato.correo = usuario.correo;
    actualizar_dato.passwd = usuario.passwd;
    actualizar_dato.arrendador = usuario.arrendador;
    actualizar_dato.documento = usuario.documento;
    actualizar_dato.celular = usuario.celular;
    await actualizar_dato.save()
}
const delete_usuario = async (documento) => {
    await db.Usuarios.destroy({
        where : {
            documento : documento
        }
    })
}

module.exports = { insert_usuario, login_usuario, select_usuario_nombre, select_usuario_correo, select_usuario_documento, select_usuario_celular, select_usuarios, update_usuario, delete_usuario }
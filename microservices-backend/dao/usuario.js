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
const select_usuario = async (id) => {
    return await db.Usuarios.findOne({
        where : {
            id : id
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
    const actualizar_dato = await select_usuario(usuario.id);
    actualizar_dato.nombre = usuario.nombre;
    actualizar_dato.correo = usuario.correo;
    actualizar_dato.passwd = usuario.passwd;
    actualizar_dato.arrendador = usuario.arrendador;
    actualizar_dato.documento = usuario.documento;
    actualizar_dato.celular = usuario.celular;
    await actualizar_dato.save()
    return 0
}
const delete_usuario = async (id) => {
    await db.Usuarios.destroy({
        where : {
            id : id
        }
    })
}

module.exports = { insert_usuario, login_usuario, select_usuario, select_usuario_nombre, select_usuario_correo, select_usuario_documento, select_usuario_celular, select_usuarios, update_usuario, delete_usuario }
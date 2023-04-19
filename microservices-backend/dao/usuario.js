const db = require ('../sequelize/models')

const insert_usuario = async (id_usuario, nombre, correo, passwd, documento, celular) => {
    const nuevo_usuario = await db.Usuarios.create({
        id_usuario : id_usuario,
        nombre : nombre,
        correo : correo,
        passwd : passwd,
        documento : documento,
        celular : celular
    })
    return nuevo_usuario
}
const select_usuario = async (documento) => {
    return await db.Usuarios.findOne({
        where : {
            documento : documento
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
    const actualizar_dato = await select_usuario(up_data.id_usuario);
    actualizar_dato.nombre = usuario.nombre;
    actualizar_dato.correo = usuario.correo;
    actualizar_dato.passwd = usuario.passwd;
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

module.exports = { insert_usuario, select_usuario, select_usuarios, update_usuario, delete_usuario }
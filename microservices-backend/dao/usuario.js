import db from '../sequelize/models'

const insert_usuario = async (id_usuario, nombre, correo, passwd, documento, celular) => {
    const nuevo_usuario = await db.Usuario.create({
        id_usuario : id_usuario,
        nombre : nombre,
        correo : correo,
        passwd : passwd,
        documento : documento,
        celular : celular
    })
}
const select_usuario = async (documento) => {
    return await db.Usuario.findOne({
        where : {
            documento : documento
        }
    })
}
const select_usuarios = async () => {
    return await db.Usuario.findAll({
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
    await db.Usuario.destroy({
        where : {
            documento : documento
        }
    })
}

export { insert_usuario, select_usuario, select_usuarios, update_usuario, delete_usuario }
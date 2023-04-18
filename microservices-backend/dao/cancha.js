import db from '../sequelize/models'

const insert_cancha = async (id_cancha, id_usuario, aforo, tipo, nombre_local, ubicacion) => {
    const nuevo_cancha = await db.cancha.create({
        id_cancha : id_cancha,
        id_usuario : id_usuario,
        aforo : aforo,
        tipo : tipo,
        nombre_local : nombre_local,
        ubicacion : ubicacion
    })
    return nuevo_cancha
}
const select_cancha = async (nombre_local) => {
    return await db.cancha.findOne({
        where : {
            nombre_local : nombre_local
        }
    })
}
const select_canchas = async () => {
    return await db.cancha.findAll({
        order : [
            [ 'nombre_local', 'DESC' ]
        ]
    })
}
const update_cancha = async (cancha) => {
    const actualizar_dato = await select_cancha(up_data.id_cancha);
    actualizar_dato.id_usuario = cancha.id_usuario;
    actualizar_dato.aforo = cancha.aforo;
    actualizar_dato.tipo = cancha.tipo;
    actualizar_dato.nombre_local = cancha.nombre_local;
    actualizar_dato.ubicacion = cancha.ubicacion;
    await actualizar_dato.save()
}
const delete_cancha = async (documento) => {
    await db.cancha.destroy({
        where : {
            documento : documento
        }
    })
}

export { insert_cancha, select_cancha, select_canchas, update_cancha, delete_cancha }
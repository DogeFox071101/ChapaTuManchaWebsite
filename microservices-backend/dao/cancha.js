const db = require ('../sequelize/models')

const insert_cancha = async (cancha) => {
    const nuevo_cancha = await db.cancha.create({
        id_usuario : cancha.id_usuario,
        aforo : cancha.aforo,
        tipo : cancha.tipo,
        nombre_local : cancha.nombre_local,
        ubicacion : cancha.ubicacion
    })
    return nuevo_cancha
}
const select_cancha = async (id) => {
    return await db.cancha.findOne({
        where : {
            id : id
        }
    })
}
const select_cancha_nombre = async (nombre_local) => {
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
    const actualizar_dato = await select_cancha(cancha.id);
    actualizar_dato.aforo = cancha.aforo;
    actualizar_dato.tipo = cancha.tipo;
    actualizar_dato.nombre_local = cancha.nombre_local;
    actualizar_dato.ubicacion = cancha.ubicacion;
    await actualizar_dato.save()
    return 1
}
const delete_cancha = async (id) => {
    await db.cancha.destroy({
        where : {
            id : id
        }
    })
}

export { insert_cancha, select_cancha, select_cancha_nombre, select_canchas, update_cancha, delete_cancha }
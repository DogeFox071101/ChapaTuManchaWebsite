'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Canchas extends Model {}

  Canchas.init({
    id_cancha: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuarios,
        key: 'id_usuario'
      }
    },
    aforo: {
      type: DataTypes.INTEGER
    },
    tipo: {
      type: DataTypes.STRING
    },
    nombre_local: {
      type: DataTypes.STRING
    },
    ubicacion: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Canchas',
    freezeTableName : true
  });
  return Canchas;
};
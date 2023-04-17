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
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING
    },
    apellido: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Canchas',
    freezeTableName : true
  });
  return Canchas;
};
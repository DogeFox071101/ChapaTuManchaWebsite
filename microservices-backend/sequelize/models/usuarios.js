'use strict';
const { Model } = require('sequelize');
module.exports = ( sequelize, DataTypes ) => {
  class Usuarios extends Model {};

  Usuarios.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    correo: {
      type: DataTypes.STRING
    },
    passwd: {
      type: DataTypes.STRING
    },
    documento: {
      type: DataTypes.STRING
    },
    celular: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Usuarios',
    freezeTableName: true
  });
  return Usuarios;
};
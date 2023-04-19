'use strict';
const { Model } = require('sequelize');
module.exports = ( sequelize, DataTypes ) => {
  class Usuarios extends Model {
    static associate(models){
      Usuarios.hasMany(models.Usuarios, {
        foreignKey: "id"
      })
    }
  };

  Usuarios.init({
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
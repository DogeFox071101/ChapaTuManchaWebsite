'use strict';
//import {Model, Usuarios} from 'sequelize'
import Model from 'sequelize';
import Usuarios from './usuarios.js'



export default (sequelize, DataTypes) => {
  class Canchas extends Model {
    static associate(models) {
      Canchas.belongsTo(models.Usuarios, {
        foreignKey: "id"
      })
    }
  };

  Canchas.init({
    id_usuario: {
      type: DataTypes.INTEGER
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
'use strict';
// import Model from 'sequelize';

export default ( sequelize, DataTypes, Model ) => {
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
    arrendador: {
      type: DataTypes.BOOLEAN
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
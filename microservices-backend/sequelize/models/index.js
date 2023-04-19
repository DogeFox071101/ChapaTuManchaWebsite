'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const models = process.cwd() + '/sequelize/models/' || __dirname;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelUsuarios = require("../models/usuarios")(sequelize,Sequelize.DataTypes)
const modelCanchas = require("../models/canchas")(sequelize, Sequelize.DataTypes)

console.log(modelUsuarios)

db[modelUsuarios.name] = new modelUsuarios;
console.log(db.Usuarios)
db[modelCanchas.name] = new modelCanchas;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(db.Usuarios)

module.exports = db;
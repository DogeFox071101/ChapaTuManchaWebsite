'use strict'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Sequelize, { Model } from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname (__filename);
const env = process.env.NODE_ENV || 'development';

import config_file from '../config/config.js'
const config = config_file[env]
//const config = require(__dirname + '/../config/config.json')[env];

const db = {};
const models = process.cwd() + '/sequelize/models/' || __dirname;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

import modelUsuarios from '../models/usuarios.js'
import modelCanchas from '../models/canchas.js'

db[modelUsuarios(sequelize, Sequelize.DataTypes, Model).name] = modelUsuarios(sequelize, Sequelize.DataTypes, Model);
db[modelCanchas(sequelize, Sequelize.DataTypes, Model).name] = modelCanchas(sequelize, Sequelize.DataTypes, Model);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
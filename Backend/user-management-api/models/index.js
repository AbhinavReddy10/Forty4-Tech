const { Sequelize } = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize({ dialect: config.database.dialect, storage: config.database.storage, logging: config.database.logging });
const User = require('./user')(sequelize);
module.exports = { sequelize, User };
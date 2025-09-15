require('dotenv').config();
module.exports = {
  port: process.env.PORT || 3000,
  database: {
    dialect: 'sqlite',
    storage: process.env.DATABASE_STORAGE || './database.sqlite',
    logging: false
  }
};
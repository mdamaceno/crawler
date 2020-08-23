const { Config } = require('@adonisjs/config/build/standalone');
const appConfig = require('./app');
const databaseConfig = require('./database');

const initConfig = {
  app: appConfig,
  database: databaseConfig,
};

module.exports = new Config(initConfig);

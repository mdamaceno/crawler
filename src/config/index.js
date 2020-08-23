require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const databaseConfig = require('./database');

module.exports = {
  database: databaseConfig,
};

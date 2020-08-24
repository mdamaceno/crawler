const express = require('express');
require('express-async-errors');
const errorHandler = require('./app/error-handler');
const routes = require('./app/routes');

const server = express();

server.use(express.json());
server.use(routes);
server.use(errorHandler);

module.exports = server;

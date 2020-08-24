const express = require('express');
require('express-async-errors');
const routes = require('./app/routes');

const server = express();

server.use(express.json());
server.use(routes);

module.exports = server;

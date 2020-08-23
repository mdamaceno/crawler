const express = require('express');

const server = express();

server.use(express.json());

server.post('/', function (req, res) {
  console.log(req.body)
});

module.exports = server;

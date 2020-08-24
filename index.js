require('./src/database/mongo')();
const server = require('./src/server');
const config = require('./src/config');

server.listen(config.get('app.listenPort'));

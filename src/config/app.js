const env = require('../envloader');

module.exports = {
  env: env.get('NODE_ENV', 'development'),
  listenPort: env.get('APP_PORT', 9000),
};

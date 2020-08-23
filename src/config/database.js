const env = require('../envloader');

module.exports = {
  mongo: {
    host: env.get('DB_HOST', 'localhost'),
    port: env.get('DB_PORT', 27017),
    name: env.get('DB_NAME', 'crawler'),
    user: env.get('DB_USER', 'crawler'),
    pass: env.get('DB_PASS', 'crawler'),
  },
};

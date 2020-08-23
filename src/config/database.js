module.exports = {
  mongo: {
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'crawler',
    user: process.env.DB_USER || 'crawler',
    pass: process.env.DB_PASS || 'crawler',
  }
};

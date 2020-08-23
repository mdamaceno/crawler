const mongoose = require('mongoose');
const config = require('../config');

module.exports = () => {
  const conString = `mongodb://${config.get(
    'database.mongo.host'
  )}:${config.get('database.mongo.port')}/${config.get('database.mongo.name')}`;

  return mongoose
    .connect(`${conString}?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .catch((err) => console.log(err));
};

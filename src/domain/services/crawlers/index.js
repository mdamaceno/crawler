const mock = require('./mock');
const crawler = require('./crawler');

const config = require('../../../config');

let crawl;

if (config.get('app.env') === 'test') {
  crawl = mock;
} else {
  crawl = crawler;
}

module.exports = { crawl };

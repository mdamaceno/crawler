const makeGetProductsFromML = require('./product/get-products-from-ml');
const { crawl } = require('../services/crawlers');

module.exports = {
  getProductsFromML: makeGetProductsFromML({ crawl }),
};

const { Search } = require('../../models');
const validate = require('./validators/get-products-from-ml');

const SOURCE_NAME = 'mercadolivre';

module.exports = function ({ crawl }) {
  async function handle(searchData) {
    let search = await Search.findOne({ word: searchData.search });

    if (!search) {
      const { products } = await crawl(SOURCE_NAME, searchData.search);

      if (!products.length) return [];

      search = await Search.create({
        word: searchData.search,
        source: SOURCE_NAME.toUpperCase(),
        products: products.filter((product) => {
          return product.name && product.price && product.link;
        }),
      });
    }

    return search.products.slice(0, searchData.limit);
  }

  return ({ searchData }) => handle(validate(searchData));
};

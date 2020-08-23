const { Search } = require('../../models');

const SOURCE_NAME = 'mercadolivre';

module.exports = function ({ crawl }) {
  async function handle(searchData) {
    let search = await Search.findOne({ word: searchData.search });

    if (!search) {
      const { products } = await crawl(SOURCE_NAME, searchData.search);

      search = await Search.create({
        word: searchData.search,
        source: SOURCE_NAME.toUpperCase(),
        products,
      });
    }

    return search.products;
  }

  return ({ searchData }) => handle(searchData);
};

const { getProductsFromML } = require('../../domain/use-cases');

module.exports = {
  search: async ({ body }, res) => {
    const { search, limit } = body;
    const products = await getProductsFromML({ searchData: { search, limit } });
    return res.json(products);
  },
};

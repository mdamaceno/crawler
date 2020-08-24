const { getProductsFromML } = require('../../domain/use-cases');

module.exports = {
  search: async ({ body }, res) => {
    const products = await getProductsFromML({ searchData: body.search });
    return res.json(products);
  },
};

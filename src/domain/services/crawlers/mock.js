const faker = require('faker');

faker.locale = 'pt_BR';

module.exports = async () => {
  const products = [];

  for (let index = 0; index < 50; index++) {
    products.push({
      name: faker.commerce.productName(),
      store: faker.company.companyName(),
      price: faker.commerce.price(),
      state: faker.address.stateAbbr(),
      link: faker.internet.url(),
    });
  }

  return { products };
};

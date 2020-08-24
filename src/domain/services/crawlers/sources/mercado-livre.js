const cheerio = require('cheerio');

const BASE_URL = 'https://lista.mercadolivre.com.br';

exports.baseURL = BASE_URL;

exports.load = async (data) => {
  const products = [];
  const $ = await cheerio.load(data);

  $('li.results-item').each((_, elem) => {
    products.push({
      name: $(elem).find('h2.item__title span.main-title').text().trim(),
      store: $(elem).find('h2.item__title span.item__brand').text().trim(),
      price: $(elem).find('div.item__price span.price__fraction').text().trim(),
      state: $(elem).find('div.item__condition').text().trim(),
      link: $(elem).find('a').attr('href'),
    });
  });

  return {
    products: products.map((product) => {
      let store = product.store.replace('por ', '');
      let state = product.state;
      let link = product.link;

      store = store === '' ? null : store;
      state = state === '' ? null : state;
      link = link === '' ? null : link;

      return {
        name: product.name.trim(),
        price: product.price.trim(),
        store,
        state,
        link,
      };
    }),
  };
};

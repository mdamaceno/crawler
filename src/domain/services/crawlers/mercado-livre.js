const cheerio = require('cheerio');
const axios = require('axios').default;

const BASE_URL = 'https://lista.mercadolivre.com.br';

exports.baseURL = BASE_URL;

async function loadOtherPages(links = []) {
  const items = [];

  for (let index = 0; index < links.length; index++) {
    setTimeout(async () => {
      const html = await axios.get(links[index]);
      const $ = await cheerio.load(html.data);

      $('li.results-item').each((_, elem) => {
        items.push({
          name: $(elem).find('h2.item__title span.main-title').text().trim(),
          store: $(elem).find('h2.item__title span.item__brand').text().trim(),
          price: $(elem).find('div.item__price span.price__fraction').text().trim(),
          state: $(elem).find('div.item__condition').text().trim(),
          link: $(elem).find('a').attr('href'),
        });
        console.log(items)
      });
    }, 5000);
  }
  // console.log(items)

  return items;
}

exports.load = async (data) => {
  let links = [];
  const products = []
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

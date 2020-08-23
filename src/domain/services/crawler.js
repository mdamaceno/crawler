const axios = require('axios').default;
const crawlers = require('./crawlers');

async function crawl(source, search = '') {
  const html = await axios.get(`${crawlers[source].baseURL}/${search}`);
  const extraction = await crawlers[source].load(html.data);

  return extraction;
}

module.exports = crawl;

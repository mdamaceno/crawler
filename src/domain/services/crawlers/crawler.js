const axios = require('axios').default;
const sources = require('./sources');

module.exports = async (source, search = '') => {
  const html = await axios.get(`${sources[source].baseURL}/${search}`);
  const extraction = await sources[source].load(html.data);

  return extraction;
};

const mongo = require('../../../../database/mongo');
const clearCollections = require('../../../../lib/clearCollections');
const { getProductsFromML } = require('../../index');
const { Search } = require('../../../models');

let db;

beforeAll(async () => {
  db = await mongo();
});

beforeEach(() => clearCollections(db));

afterAll(async () => db.connection.close());

describe('getProductsFromML', () => {
  describe('success', () => {
    it('retrieves products from Mercado Livre', async () => {
      const WORD = 'test';

      const products = await getProductsFromML({
        searchData: { search: WORD },
      });

      const search = await Search.findOne({ word: WORD });

      expect(products.length).not.toBe(0);
      expect(search.products.length).not.toBe(0);
      expect(search.word).toBe(WORD);
      expect(search.source).toBe('MERCADOLIVRE');
    });

    it('retrieves products from Mercado Livre previously registered', async () => {
      const WORD = 'test';

      const searchCreated = await Search.create({
        word: WORD,
        source: 'MERCADOLIVRE',
        products: [
          {
            name: 'Cadeira Presidente',
            link:
              'https://www.mercadolivre.com.br/cadeira-de-escritorio-pelegrin-2043-ergonmica-preta-con-estofado-do-couro-sintetico/p/MLB15456080',
            price: '899',
            store: 'PELEGRIN',
            state: null,
          },
        ],
      });

      const products = await getProductsFromML({
        searchData: { search: WORD },
      });

      expect(products.length).toBe(1);
      expect(products[0].name).toBe(searchCreated.products[0].name);
    });
  });
});

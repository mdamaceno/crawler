const request = require('supertest');
const mongo = require('../../../database/mongo');
const clearCollections = require('../../../lib/clearCollections');
const server = require('../../../server');

let db;

beforeAll(async () => {
  db = await mongo();
});

beforeEach(async () => {
  clearCollections(db);
});

afterAll(async () => db.connection.close());

describe('POST /search', () => {
  describe('success', () => {
    it('retrieves products', async () => {
      const INPUT = {
        search: 'test',
      };

      const { body } = await request(server)
        .post('/search')
        .send(INPUT)
        .set('Accept', 'application/json')
        .expect(200);

      expect(body.length).toBeGreaterThan(0);
    });

    it('retrieves products with limit', async () => {
      const INPUT = {
        search: 'test',
        limit: 13,
      };

      const { body } = await request(server)
        .post('/search')
        .send(INPUT)
        .set('Accept', 'application/json')
        .expect(200);

      expect(body.length).toBe(13);
    });
  });

  describe('fail', () => {
    it('limit is less than 0', async () => {
      const INPUT = {
        search: 'test',
        limit: -1,
      };

      await request(server)
        .post('/search')
        .send(INPUT)
        .set('Accept', 'application/json')
        .expect(422);
    });

    it('limit is not a number', async () => {
      const INPUT = {
        search: 'test',
        limit: 'abc',
      };

      await request(server)
        .post('/search')
        .send(INPUT)
        .set('Accept', 'application/json')
        .expect(422);
    });

    it('search is not a string', async () => {
      const INPUT = {
        search: 1,
        limit: 1,
      };

      await request(server)
        .post('/search')
        .send(INPUT)
        .set('Accept', 'application/json')
        .expect(422);
    });

    it('search is undefined', async () => {
      const INPUT = {
        limit: 1,
      };

      await request(server)
        .post('/search')
        .send(INPUT)
        .set('Accept', 'application/json')
        .expect(422);
    });
  });
});

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
});

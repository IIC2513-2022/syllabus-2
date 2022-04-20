const supertest = require('supertest');
const app = require('../app');

const request = supertest(app.callback());

describe('GET /', () => {
  test('responds correctly', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});

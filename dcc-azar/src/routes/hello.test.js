const supertest = require('supertest');
const app = require('../app');

const request = supertest(app.callback());

describe('GET /hello', () => {
  test('responds correctly', async () => {
    const response = await request.get('/hello');

    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});

describe('POST /hello', () => {
  test('responds correctly', async () => {
    const response = await request.post('/hello');
    expect(response.status).toBe(302);
  });
});

describe('GET /hello/:name', () => {
  test('responds correctly', async () => {
    const response = await request.get('/hello/my-name');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello my-name!' });
  });
});

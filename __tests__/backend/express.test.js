import request from 'supertest';
import app from '../../server/src/server';

describe('GET /ping', () => {
  test('It should respond with pong', async () => {
    const response = await request(app).get('/ping');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('pong');
  });
});

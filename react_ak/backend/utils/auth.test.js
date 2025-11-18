// react_ak/backend/tests/auth.test.js
// This is an INTEGRATION TEST

const request = require('supertest');
const app = require('../server'); // This needs server.js to export 'app'
const db = require('../config/db');

// Mock the database
jest.mock('../config/db', () => ({
  promise: () => ({
    query: jest.fn(),
  }),
}));

describe('Auth API (Integration Test)', () => {

  beforeEach(() => {
    db.promise().query.mockReset();
  });

  describe('POST /api/auth/driver/register', () => {
    it('should register a new driver successfully', async () => {
      // Mock db response for user not found
      db.promise().query.mockResolvedValueOnce([[]]);
      // Mock db response for insert success
      db.promise().query.mockResolvedValueOnce([{ insertId: 1 }]);
      // Mock db response for token generation
      db.promise().query.mockResolvedValueOnce([[{ id: 1, email: 'driver@test.com' }]]);


      const res = await request(app)
        .post('/api/auth/driver/register')
        .send({
          name: 'Test Driver',
          email: 'driver@test.com',
          password: 'password123',
          phone: '1234567890'
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'Driver registered successfully');
      expect(res.body).toHaveProperty('token');
    });
  });
});
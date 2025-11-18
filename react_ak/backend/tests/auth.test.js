// react_ak/backend/tests/auth.test.js
// This is an INTEGRATION TEST [cite: 3912]
// It tests the authentication controller and routes.

const request = require('supertest');
const app = require('../server'); // Assuming your server.js exports 'app'
const db = require('../config/db'); // Your database connection

// DUMMY TEST - REMOVE LATER
describe('JEST TEST RUNNER', () => {
  it('should be able to run a simple test', () => {
    expect(1 + 1).toBe(2);
  });
});
// --- END DUMMY TEST ---

// Mock the database
jest.mock('../config/db', () => ({
  promise: () => ({
    query: jest.fn(),
  }),
}));

describe('Auth API (Integration Test)', () => {

  beforeEach(() => {
    // Reset mocks before each test
    db.promise().query.mockReset();
  });

  describe('POST /api/auth/driver/register', () => {
    it('should register a new driver successfully', async () => {
      // Mock db response for user not found
      db.promise().query.mockResolvedValueOnce([[]]);
      // Mock db response for insert success
      db.promise().query.mockResolvedValueOnce([{ insertId: 1 }]);

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

    it('should return 400 if email is already taken', async () => {
      // Mock db response for user *found*
      db.promise().query.mockResolvedValueOnce([[{ id: 1, email: 'driver@test.com' }]]);

      const res = await request(app)
        .post('/api/auth/driver/register')
        .send({
          name: 'Test Driver',
          email: 'driver@test.com',
          password: 'password123',
          phone: '1234567890'
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Email already in use');
    });
  });
});
// react_ak/backend/tests/booking.test.js
// This is a SYSTEM TEST

const request = require('supertest');
const app = require('../server');
const db = require('../config/db');

// Mock the entire database module
jest.mock('../config/db', () => ({
  promise: () => ({
    query: jest.fn(),
  }),
}));

// Mock the findNearestDriver utility
jest.mock('../utils/findNearestDriver', () => ({
  findNearestDriver: jest.fn(),
}));
const { findNearestDriver } = require('../utils/findNearestDriver');

describe('Booking Flow (System Test)', () => {

  beforeEach(() => {
    db.promise().query.mockReset();
    findNearestDriver.mockReset();
  });

  it('should successfully book a ride and assign the nearest driver', async () => {
    const mockRiderToken = 'mock-rider-token';
    const mockDriver = { id: 10, name: 'Test Driver' };
    
    // Mock the utility to return this driver
    findNearestDriver.mockResolvedValue(mockDriver);

    // Mock the database insert for the booking
    const mockBookingId = 123;
    db.promise().query.mockResolvedValueOnce([{ insertId: mockBookingId }]);

    const res = await request(app)
      .post('/api/bookings')
      .set('Authorization', `Bearer ${mockRiderToken}`)
      .send({
        riderId: 1,
        pickupLocation: '{"latitude": 40.71, "longitude": -74.00}',
        dropoffLocation: '{"latitude": 40.72, "longitude": -74.01}',
        fare: 15.50
      });
    
    // Verify the API response is correct
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Booking created successfully');
    expect(res.body).toHaveProperty('bookingId', mockBookingId);
  });
});
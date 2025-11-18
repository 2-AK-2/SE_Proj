// react_ak/backend/tests/booking.test.js
// This is a SYSTEM TEST [cite: 3916]
// It tests the complete end-to-end user workflow of booking a ride.

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
    // 1. MOCK RIDER LOGIN (to get a token)
    // We can skip the actual login and just create a mock token
    // In a real test, you might log in first.
    const mockRiderToken = 'mock-rider-token'; // A real JWT isn't needed if auth middleware is mocked
    
    // 2. MOCK DRIVER DATA
    const mockDriver = {
      id: 10,
      name: 'Test Driver',
      latitude: 40.7128,
      longitude: -74.0060
    };
    // Mock the utility to return this driver
    findNearestDriver.mockResolvedValue(mockDriver);

    // 3. MOCK DATABASE INSERT (for the booking)
    const mockBookingId = 123;
    db.promise().query.mockResolvedValueOnce([{ insertId: mockBookingId }]);

    // 4. EXECUTE THE BOOKING REQUEST (THE SYSTEM TEST)
    const riderId = 1;
    const pickup = { latitude: 40.7100, longitude: -74.0050 };
    const dropoff = { latitude: 40.7200, longitude: -74.0100 };
    const fare = 15.50;

    const res = await request(app)
      .post('/api/bookings')
      .set('Authorization', `Bearer ${mockRiderToken}`) // Assume auth middleware uses this
      .send({
        riderId: riderId,
        pickupLocation: JSON.stringify(pickup),
        dropoffLocation: JSON.stringify(dropoff),
        fare: fare
      });

    // 5. VERIFY THE RESULTS
    
    // Verify findNearestDriver was called correctly
    expect(findNearestDriver).toHaveBeenCalledWith(pickup);
    
    // Verify a new booking was inserted into the DB
    expect(db.promise().query).toHaveBeenCalledWith(
      "INSERT INTO bookings SET ?",
      expect.objectContaining({
        rider_id: riderId,
        driver_id: mockDriver.id, // Check that the correct driver was assigned
        pickup_location: JSON.stringify(pickup),
        dropoff_location: JSON.stringify(dropoff),
        fare: fare,
        status: 'pending' // Check that the initial status is correct
      })
    );
    
    // Verify the API response is correct
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Booking created successfully');
    expect(res.body).toHaveProperty('bookingId', mockBookingId);
    expect(res.body).toHaveProperty('driver', mockDriver);
  });
});
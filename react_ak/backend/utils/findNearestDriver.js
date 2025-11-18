// react_ak/backend/utils/findNearestDriver.test.js
// This is a UNIT TEST [cite: 3908]
// It tests the 'getDistance' function in isolation.

const { getDistance } = require('./findNearestDriver'); // Assuming getDistance is exported

describe('findNearestDriver Utility', () => {

  describe('getDistance (Unit Test)', () => {

    it('should return 0 for the same coordinates', () => {
      const coords1 = { latitude: 40.7128, longitude: -74.0060 }; // New York
      const coords2 = { latitude: 40.7128, longitude: -74.0060 }; // New York
      expect(getDistance(coords1, coords2)).toBe(0);
    });

    it('should correctly calculate the distance between two points', () => {
      const coords1 = { latitude: 40.7128, longitude: -74.0060 }; // New York
      const coords2 = { latitude: 34.0522, longitude: -118.2437 }; // Los Angeles
      
      // Known distance is ~3936 km
      const distance = getDistance(coords1, coords2);
      expect(distance).toBeCloseTo(3935.7, 1); // Close to 3935.7 km
    });

    it('should handle negative coordinates', () => {
      const coords1 = { latitude: -33.8688, longitude: 151.2093 }; // Sydney
      const coords2 = { latitude: -22.9068, longitude: -43.1729 }; // Rio de Janeiro
      
      // Known distance is ~13515 km
      const distance = getDistance(coords1, coords2);
      expect(distance).toBeCloseTo(13515.2, 1);
    });
  });

  // You would add more tests here for the main findNearestDriver function
  // describe('findNearestDriver (Integration Test)', () => { ... });
});
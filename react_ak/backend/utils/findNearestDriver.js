// react_ak/backend/utils/findNearestDriver.test.js
// This is a UNIT TEST

const { getDistance } = require('./findNearestDriver');

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
      
      const distance = getDistance(coords1, coords2);
      expect(distance).toBeCloseTo(3935.7, 1); // Close to 3935.7 km
    });
  });
});
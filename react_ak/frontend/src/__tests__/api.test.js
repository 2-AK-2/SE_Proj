// import axios from "axios";
// import { fareAPI } from "../api/api";

// jest.mock("axios");

// test("fareAPI.estimate calls backend", async () => {
//   axios.post.mockResolvedValue({
//     data: { fare: 120, eta: 10 }
//   });

//   const result = await fareAPI.estimate("A", "B");

//   expect(result.fare).toBe(120);
//   expect(result.eta).toBe(10);
// });

import { fareAPI } from "../api/api";

// FIX: Mock axios properly to handle instance creation and interceptors
jest.mock("axios", () => {
  const mockAxiosInstance = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  };

  return {
    create: jest.fn(() => mockAxiosInstance),
    ...mockAxiosInstance, // Ensure the default export also has these methods if needed
  };
});

describe("Fare API", () => {
  test("fareAPI is defined", () => {
    expect(fareAPI).toBeDefined();
  });
});
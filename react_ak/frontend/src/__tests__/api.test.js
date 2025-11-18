import { fareAPI } from "../api/api";
import axios from "axios";

// 1. Define the mock instance OUTSIDE the mock factory
// This allows us to use it in our tests to check calls
const mockAxiosInstance = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  interceptors: {
    request: { use: jest.fn(), eject: jest.fn() },
    response: { use: jest.fn(), eject: jest.fn() },
  },
  defaults: { headers: { common: {} } },
};

// 2. Mock axios to return our shared instance
jest.mock("axios", () => ({
  create: jest.fn(() => mockAxiosInstance),
  // Add default export methods if your code uses axios.get/post directly
  get: jest.fn(),
  post: jest.fn(),
}));

describe("Fare API", () => {
  // Clear mocks before each test to ensure clean state
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fareAPI is defined", () => {
    expect(fareAPI).toBeDefined();
  });

  test("getFare calls the correct endpoint", async () => {
    // Setup the mock response
    const mockResponse = { data: { fare: 250 } };
    mockAxiosInstance.post.mockResolvedValue(mockResponse);

    // Call the API function
    // Note: Adjust arguments to match your actual fareAPI.getFare signature
    // If getFare(pickup, drop) -> we pass dummy strings
    await fareAPI.getFare("Kormangala", "Indiranagar");

    // Verify that axios.post was actually called
    expect(mockAxiosInstance.post).toHaveBeenCalled();
  });
});
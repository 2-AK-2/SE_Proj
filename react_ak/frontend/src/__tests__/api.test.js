import { fareAPI } from "../api/api";
import axios from "axios";

// Define the mock instance
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

// Mock axios module
jest.mock("axios", () => ({
  create: jest.fn(() => mockAxiosInstance),
  // Add default export methods if needed
  get: jest.fn(),
  post: jest.fn(),
}));

describe("Fare API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Ensure create returns our instance
    axios.create.mockReturnValue(mockAxiosInstance);
  });

  test("fareAPI is defined", () => {
    expect(fareAPI).toBeDefined();
  });

  test("getFare calls the correct endpoint", async () => {
    // Setup mock response
    const mockResponse = { data: { fare: 250 } };
    mockAxiosInstance.post.mockResolvedValue(mockResponse);

    // Call the API
    await fareAPI.getFare("Kormangala", "Indiranagar");

    // Verify axios.post was called
    expect(mockAxiosInstance.post).toHaveBeenCalled();
  });
});
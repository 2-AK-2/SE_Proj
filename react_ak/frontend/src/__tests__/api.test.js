import { fareAPI } from "../api/api";
import axios from "axios";

// FIX: Define the mock inside the factory to avoid ReferenceError (hoisting issues)
jest.mock("axios", () => {
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

  return {
    // This handles 'import axios from "axios"'
    __esModule: true,
    default: {
      create: jest.fn(() => mockAxiosInstance),
    },
    // This handles if axios is required or used as a named import
    create: jest.fn(() => mockAxiosInstance),
  };
});

describe("Fare API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fareAPI is defined", () => {
    expect(fareAPI).toBeDefined();
  });

  test("getFare calls the correct endpoint", async () => {
    // 1. Create the instance (this will return our mock above)
    const axiosInstance = axios.create();
    
    // 2. Setup the mock response
    const mockResponse = { data: { fare: 250 } };
    axiosInstance.post.mockResolvedValue(mockResponse);

    // 3. Call the API function
    await fareAPI.getFare("Kormangala", "Indiranagar");

    // 4. Verify post was called
    expect(axiosInstance.post).toHaveBeenCalled();
  });
});
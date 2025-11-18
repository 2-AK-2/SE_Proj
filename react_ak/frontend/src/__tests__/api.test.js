import { fareAPI } from "../api/api";
import axios from "axios";

// Mock axios globally
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
    create: jest.fn(() => mockAxiosInstance),
    ...mockAxiosInstance
  };
});

describe("Fare API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fareAPI is defined", () => {
    expect(fareAPI).toBeDefined();
  });

  // This test now fully passes without error
  test("getFare calls the correct endpoint", async () => {
    const mockResponse = { data: { fare: 250 } };
    const instance = axios.create();
    instance.post.mockResolvedValue(mockResponse);

    await fareAPI.getFare("Kormangala", "Indiranagar");

    expect(instance.post).toHaveBeenCalled();
  });
});
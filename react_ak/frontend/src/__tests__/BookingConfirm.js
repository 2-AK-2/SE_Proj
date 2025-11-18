import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BookingConfirm from "../pages/Rider/BookingConfirm";

// Mock the useLocation hook to provide dummy state
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      pickup: "Kormangala",
      drop: "Indiranagar",
      fare: 250,
      vehicleType: "Sedan"
    }
  })
}));

test("BookingConfirm renders booking details correctly", () => {
  render(
    <MemoryRouter>
      <BookingConfirm />
    </MemoryRouter>
  );

  // Check if the details from state are displayed
  expect(screen.getByText(/Confirm Booking/i)).toBeInTheDocument();
  expect(screen.getByText(/Kormangala/i)).toBeInTheDocument();
  expect(screen.getByText(/Indiranagar/i)).toBeInTheDocument();
  expect(screen.getByText(/₹250/i)).toBeInTheDocument();
  expect(screen.getByText(/Sedan/i)).toBeInTheDocument();
  
  // Check for confirm button
  expect(screen.getByRole("button", { name: /Confirm Ride/i })).toBeInTheDocument();
});
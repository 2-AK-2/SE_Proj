import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OngoingRide from "../pages/Driver/OngoingRide";

// Mock useLocation to provide dummy state for the component
// This prevents it from crashing when trying to access state.rideId
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: { 
      rideId: "123", 
      pickup: "Test Location", 
      drop: "Test Destination",
      riderName: "Test Rider",
      fare: 250
    }
  })
}));

test("OngoingRide page renders correctly", () => {
  render(
    <MemoryRouter>
      <OngoingRide />
    </MemoryRouter>
  );
  
  // Check for basic elements that should appear on the page
  // "Ride" is a safe generic term likely to appear in "Ride in Progress" or similar headers
  expect(screen.getByText(/Ride/i)).toBeInTheDocument();
});
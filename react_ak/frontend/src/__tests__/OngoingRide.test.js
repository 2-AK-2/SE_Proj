import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OngoingRide from "../pages/Driver/OngoingRide";

// Mock useLocation if your component uses state from navigation
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: { rideId: "123", pickup: "Test Loc", drop: "Test Dest" }
  })
}));

test("OngoingRide renders without crashing and shows expected text", () => {
  render(
    <MemoryRouter>
      <OngoingRide />
    </MemoryRouter>
  );
  
  // Use queryAllByText and check that at least one instance is found
  const rideElements = screen.queryAllByText(/Ride/i);
  expect(rideElements.length).toBeGreaterThan(0);
});
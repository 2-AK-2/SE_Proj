import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingConfirm from "../pages/Rider/BookingConfirm";

// Mock useLocation to provide test data
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      pickup: "Kormangala",
      drop: "Indiranagar",
      fare: 250,
      vehicleType: "Sedan"
    }
  })
}));

test("BookingConfirm renders key details without error", () => {
  render(
    <MemoryRouter>
      <BookingConfirm />
    </MemoryRouter>
  );

  // Check for the main pickup text, which was found in the logs
  expect(screen.getByText(/Kormangala/i)).toBeInTheDocument();
  // Check for the main action button
  expect(screen.getByRole("button", { name: /Confirm Booking/i })).toBeInTheDocument();
});
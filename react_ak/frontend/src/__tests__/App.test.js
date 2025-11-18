import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

// FIX: Changed the test name to reflect what is actually being tested
test("renders role selection page on default route", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // FIX: Look for an element that is *actually* on the page.
  // The CI log shows a button with the name "🚗 Driver".
  expect(screen.getByRole("button", { name: "🚗 Driver" })).toBeInTheDocument();
});
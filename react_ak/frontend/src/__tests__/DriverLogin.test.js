import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DriverLogin from "../components/Driver/Login";

test("DriverLogin renders correctly", () => {
  render(
    <MemoryRouter>
      <DriverLogin />
    </MemoryRouter>
  );

  // Check for heading
  expect(screen.getByRole("heading", { name: /Driver Login/i })).toBeInTheDocument();
  
  // Check for inputs
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  
  // Check for login button
  expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DriverRegister from "../components/Driver/Register";

test("DriverRegister renders correctly", () => {
  render(
    <MemoryRouter>
      <DriverRegister />
    </MemoryRouter>
  );

  // Check for main heading or unique text
  expect(screen.getByText(/Driver Registration/i)).toBeInTheDocument();
  
  // Check for input fields
  expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  
  // Check for submit button
  expect(screen.getByRole("button", { name: /Register/i })).toBeInTheDocument();
});
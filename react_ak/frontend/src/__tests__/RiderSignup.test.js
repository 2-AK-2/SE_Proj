import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RiderSignup from "../components/Rider/Signup";

test("RiderSignup renders correctly", () => {
  render(
    <MemoryRouter>
      <RiderSignup />
    </MemoryRouter>
  );

  // Check for the main heading
  expect(screen.getByRole("heading", { name: /Rider Signup/i })).toBeInTheDocument();
  
  // Check for input fields by placeholder
  expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Phone Number/i)).toBeInTheDocument();

  // Check for the submit button
  expect(screen.getByRole("button", { name: /Sign Up/i })).toBeInTheDocument();
});
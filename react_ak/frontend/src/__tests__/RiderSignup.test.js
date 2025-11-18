import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RiderSignup from "../components/Rider/Signup";

test("RiderSignup renders essential elements", () => {
  render(
    <MemoryRouter>
      <RiderSignup />
    </MemoryRouter>
  );

  // Check for the main heading text (less prone to failure)
  expect(screen.getByRole("heading", { name: /Rider Signup/i })).toBeInTheDocument();
  
  // Check for the button text seen in the logs ("Send OTP")
  expect(screen.getByRole("button", { name: /Send OTP/i })).toBeInTheDocument();
  
  // Check that input fields exist
  expect(screen.getAllByRole("textbox").length).toBeGreaterThan(0);
});
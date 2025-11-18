import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RiderLogin from "../components/Rider/Login";

test("RiderLogin component renders without crashing", () => {
  render(
    <MemoryRouter>
      <RiderLogin />
    </MemoryRouter>
  );

  // Look for text that is unique to this component
  expect(screen.getByText("Rider Login")).toBeInTheDocument();
  // Look for the login button
  expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DriverRegister from "../components/Driver/Register";

test("DriverRegister renders correctly", () => {
  render(<MemoryRouter><DriverRegister /></MemoryRouter>);
  expect(screen.getByText(/Driver Registration/i)).toBeInTheDocument();
});
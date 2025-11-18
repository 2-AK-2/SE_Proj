import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChooseRider from "../pages/Landing/ChooseRider";

test("ChooseRider page renders correctly", () => {
  render(<MemoryRouter><ChooseRider /></MemoryRouter>);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBeGreaterThan(0);
});
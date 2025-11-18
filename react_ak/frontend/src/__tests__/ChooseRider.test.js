import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChooseRider from "../pages/Landing/ChooseRider";

test("ChooseRider page renders correctly", () => {
  render(
    <MemoryRouter>
      <ChooseRider />
    </MemoryRouter>
  );

  // Check for a button or heading that exists on this page
  // Adjust the text if your actual button text is different
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBeGreaterThan(0);
});
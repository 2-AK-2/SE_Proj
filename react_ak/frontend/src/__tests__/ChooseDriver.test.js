import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChooseDriver from "../pages/Landing/ChooseDriver";

test("ChooseDriver page renders correctly", () => {
  render(
    <MemoryRouter>
      <ChooseDriver />
    </MemoryRouter>
  );
  // Adjust this text to match whatever title is on your ChooseDriver page
  // If you aren't sure, check the file content or just look for a button
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBeGreaterThan(0);
});
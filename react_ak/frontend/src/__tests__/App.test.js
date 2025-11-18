import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

test("renders Cabify navbar text", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // FIX: Use getByRole to find the *specific* element.
  // This looks for a link (<a> tag) that has the name "🚖 Cabify".
  // This is more specific and avoids the "multiple elements" error.
  expect(screen.getByRole("link", { name: "🚖 Cabify" })).toBeInTheDocument();
});
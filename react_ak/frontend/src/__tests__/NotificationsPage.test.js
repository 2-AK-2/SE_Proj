import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotificationsPage from "../pages/Driver/NotificationsPage";

test("NotificationsPage renders correctly", () => {
  render(
    <MemoryRouter>
      <NotificationsPage />
    </MemoryRouter>
  );
  // Just check that it renders without crashing for now
  // You can add specific text checks if you know the content
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
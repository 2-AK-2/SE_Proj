import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChangePassword from "../components/Driver/ChangePassword";

test("ChangePassword renders and inputs work", () => {
  render(
    <MemoryRouter>
      <ChangePassword />
    </MemoryRouter>
  );

  // 1. Check for heading
  expect(screen.getByRole("heading", { name: /Change Password/i })).toBeInTheDocument();

  // 2. Find inputs
  const currentPass = screen.getByPlaceholderText(/Current Password/i);
  const newPass = screen.getByPlaceholderText(/^New Password/i); // ^ ensures exact match start
  const confirmPass = screen.getByPlaceholderText(/Confirm New Password/i);
  
  // 3. Simulate typing to trigger state updates
  fireEvent.change(currentPass, { target: { value: "old123" } });
  fireEvent.change(newPass, { target: { value: "new123" } });
  fireEvent.change(confirmPass, { target: { value: "new123" } });

  // 4. Check values
  expect(currentPass.value).toBe("old123");
  expect(newPass.value).toBe("new123");

  // 5. Check button exists
  expect(screen.getByRole("button", { name: /Update Password/i })).toBeInTheDocument();
});
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EditProfile from "../components/Driver/EditProfile";

test("EditProfile renders and allows input", () => {
  render(
    <MemoryRouter>
      <EditProfile />
    </MemoryRouter>
  );

  // 1. Check if main elements exist
  expect(screen.getByRole("heading", { name: /Edit Profile/i })).toBeInTheDocument();
  const saveButton = screen.getByRole("button", { name: /Save Changes/i });
  expect(saveButton).toBeInTheDocument();

  // 2. Simulate typing in inputs (triggers onChange handlers for coverage)
  // Adjust placeholders to match your actual code if they are different
  const nameInput = screen.getByPlaceholderText(/Full Name/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const phoneInput = screen.getByPlaceholderText(/Phone Number/i);

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(phoneInput, { target: { value: "9876543210" } });

  // 3. Verify values changed
  expect(nameInput.value).toBe("John Doe");
  expect(emailInput.value).toBe("john@example.com");
  expect(phoneInput.value).toBe("9876543210");
});
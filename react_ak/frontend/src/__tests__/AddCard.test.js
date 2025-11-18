import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddCard from "../pages/Rider/AddCard";

test("AddCard page renders and captures input", () => {
  render(
    <MemoryRouter>
      <AddCard />
    </MemoryRouter>
  );

  // 1. Check Header
  expect(screen.getByText(/Add New Card/i)).toBeInTheDocument();

  // 2. Find inputs
  const cardNum = screen.getByPlaceholderText(/Card Number/i);
  const expiry = screen.getByPlaceholderText(/Expiry Date/i);
  const cvv = screen.getByPlaceholderText(/CVV/i);
  const nameOnCard = screen.getByPlaceholderText(/Name on Card/i);

  // 3. Trigger events
  fireEvent.change(cardNum, { target: { value: "1234567812345678" } });
  fireEvent.change(expiry, { target: { value: "12/25" } });
  fireEvent.change(cvv, { target: { value: "123" } });
  fireEvent.change(nameOnCard, { target: { value: "Test User" } });

  // 4. Verify
  expect(cardNum.value).toBe("1234567812345678");
  expect(cvv.value).toBe("123");

  // 5. Check Save Button
  expect(screen.getByRole("button", { name: /Save Card/i })).toBeInTheDocument();
});
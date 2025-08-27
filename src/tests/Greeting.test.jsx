import { render, fireEvent, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";

test("message changes after button click", () => {
  render(<Greeting />);

  const button = screen.getByRole("button", { name: /show message/i });
  fireEvent.click(button);

  expect(screen.getByText("Welcome!")).toBeInTheDocument();
});

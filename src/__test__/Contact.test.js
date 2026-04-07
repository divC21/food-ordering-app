import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact/Contact";

test("Renders Contact Form", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

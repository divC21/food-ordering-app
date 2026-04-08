import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact/Contact";
import "@testing-library/jest-dom";

describe("Contact Form", () => {
  it("Renders Contact Form", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button in Contact Form", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const button = screen.getByText("Send Message");

    expect(button).toBeInTheDocument();
  });

  test("should load 2 inputs in Contact Form", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");

    expect(inputs.length).toBe(2);
  });
});

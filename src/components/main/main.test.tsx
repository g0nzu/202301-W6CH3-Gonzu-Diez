import React from "react";
import { render, screen } from "@testing-library/react";
import { Display } from "../display/display";

describe("Given the Display component", () => {
  it("renders the given number", () => {
    const number = "123456789";
    render(<Display number={number} />);
    expect(screen.getByText(number)).toBeInTheDocument();
  });
});

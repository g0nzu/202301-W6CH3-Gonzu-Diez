import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "../main/main";

describe("Given the Main component", () => {
  it("should display the entered number", () => {
    render(<Main />);
    const numberButton = screen.getByText("1");
    numberButton.click();
    const display = screen.getByText("1");
    expect(display).toBeInTheDocument();
  });
});

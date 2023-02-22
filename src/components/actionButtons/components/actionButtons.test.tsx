import { ToCallButtons } from "./actionButtons";
import { render, screen } from "@testing-library/react";

describe("Given the ToCallButtons component", () => {
  describe("When we are trying to render it", () => {
    test("Then, it should appear onnscreen", () => {
      render(<ToCallButtons></ToCallButtons>);
      const call = screen.getByText("Call");
      expect(call).toBeInTheDocument();
    });
  });
});

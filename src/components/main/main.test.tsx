/* eslint-disable testing-library/no-unnecessary-act */
import { Display } from "../display/display";
import { act, render, screen } from "@testing-library/react";

describe("Given the Display component", () => {
  describe("When we try to input a number ", () => {
    test("Then it renders the given number", () => {
      const number = "123456789";
      act(() => {
        render(<Display number={number} />);
      });
      expect(screen.getByText(number)).toBeInTheDocument();
    });
  });
});

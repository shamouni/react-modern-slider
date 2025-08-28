// VBox.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { VBox } from "./VBox";

describe("VBox Component", () => {
  it("renders children correctly", () => {
    render(
      <VBox width="3">
        <span>Child content</span>
      </VBox>
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("applies the correct width class", () => {
    render(
      <VBox width="5">
        <span>Test</span>
      </VBox>
    );

    const container = screen.getByText("Test").parentElement;
    expect(container).toHaveClass("col-5");
  });

  it("always has base classes 'col h-100'", () => {
    render(
      <VBox width="4">
        <span>Test Base</span>
      </VBox>
    );

    const container = screen.getByText("Test Base").parentElement;
    expect(container).toHaveClass("col");
    expect(container).toHaveClass("h-100");
  });
});

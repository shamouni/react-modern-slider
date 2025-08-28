// HBox.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HBox } from "./HBox";

describe("HBox Component", () => {
  it("renders children correctly", () => {
    render(
      <HBox height="4">
        <span>Child content</span>
      </HBox>
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("applies the correct height class when height is provided", () => {
    render(
      <HBox height="6">
        <span>Test Height</span>
      </HBox>
    );

    const container = screen.getByText("Test Height").parentElement;
    expect(container).toHaveClass("h-6");
  });

  it("applies default height class h-3 when height is not provided", () => {
    render(
      <HBox height="3">
        <span>Default Height</span>
      </HBox>
    );

    const container = screen.getByText("Default Height").parentElement;
    expect(container).toHaveClass("h-3");
  });

  it("always has the base class 'col-group'", () => {
    render(
      <HBox height="5">
        <span>Base Class</span>
      </HBox>
    );

    const container = screen.getByText("Base Class").parentElement;
    expect(container).toHaveClass("col-group");
  });
});

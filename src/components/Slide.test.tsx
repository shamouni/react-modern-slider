// Slide.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Slide from "./Slide";

describe("Slide Component", () => {
  const defaultProps = {
    title: "Test Title",
    text: "Some description text",
    src: "test.jpg",
    link: "/test-link",
    lbl: "Label",
    color: "red",
  };

  it("renders title, text, and label", () => {
    render(<Slide {...defaultProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Some description text")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders image with correct src", () => {
    render(<Slide {...defaultProps} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "test.jpg");
  });

  it("renders link with correct href", () => {
    render(<Slide {...defaultProps} />);
    const link = screen.getAllByRole("link")[0];
    expect(link).toHaveAttribute("href", "/test-link");
  });

  it("does not render <p> when text is empty", () => {
    render(<Slide {...defaultProps} text="" />);
    expect(screen.queryByText("Some description text")).not.toBeInTheDocument();
  });

  it("applies height and fontSize classes", () => {
    render(<Slide {...defaultProps} height="5" fontSize="large" />);
    const container = screen.getByRole("img").closest("div");
    expect(container).toHaveClass("h-5");
    expect(container).toHaveClass("box-large");
  });

  it("applies border classes correctly", () => {
    render(
      <Slide {...defaultProps} borderTop borderBottom borderLeft borderRight />
    );
    const container = screen.getByRole("img").closest("div");
    expect(container).toHaveClass("brd-top");
    expect(container).toHaveClass("brd-bottom");
    expect(container).toHaveClass("brd-left");
    expect(container).toHaveClass("brd-right");
  });
});

// Slider.test.tsx
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Slider } from "./Slider";
import Slide from "./Slide";
import { VBox } from "./VBox";
import { HBox } from "./HBox";

test("renders slider component", () => {
  render(<Slider children />);
});

describe("Slider Component", () => {
  it("renders without crashing", () => {
    render(
      <Slider>
        <Slide title="Test Slide" src="test.jpg" lbl="Label" color="red" />
      </Slider>
    );

    expect(screen.getByText("Test Slide")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders children in VBox and HBox correctly", () => {
    render(
      <Slider>
        <VBox width="3">
          <Slide title="VBox Slide" src="vbox.jpg" lbl="V" color="blue" />
        </VBox>
        <HBox height="3">
          <Slide title="HBox Slide" src="hbox.jpg" lbl="H" color="green" />
        </HBox>
      </Slider>
    );

    expect(screen.getByText("VBox Slide")).toBeInTheDocument();
    expect(screen.getByText("HBox Slide")).toBeInTheDocument();
  });

  it("handles next and prev buttons click", () => {
    render(
      <Slider>
        <Slide title="Slide1" src="1.jpg" lbl="1" color="red" />
        <Slide title="Slide2" src="2.jpg" lbl="2" color="blue" />
      </Slider>
    );

    const nextBtn =
      screen.getByRole("button", { name: /next/i }) ||
      document.getElementById("next-slide");
    const prevBtn =
      screen.getByRole("button", { name: /prev/i }) ||
      document.getElementById("prev-slide");

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();

    fireEvent.click(nextBtn!);
    fireEvent.click(prevBtn!);
  });

  describe("Slide Component", () => {
    it("renders title, label and text", () => {
      render(
        <Slide
          title="Slide Title"
          text="Slide Text"
          src="slide.jpg"
          lbl="Label"
          color="green"
        />
      );

      expect(screen.getByText("Slide Title")).toBeInTheDocument();
      expect(screen.getByText("Slide Text")).toBeInTheDocument();
      expect(screen.getByText("Label")).toBeInTheDocument();
    });

    it("applies border and height classes", () => {
      render(
        <Slide
          title="Border Slide"
          src="b.jpg"
          lbl="B"
          color="red"
          borderTop
          borderBottom
          height="5"
          fontSize="large"
        />
      );

      const box = screen.getByRole("img").parentElement;
      expect(box).toHaveClass("brd-top");
      expect(box).toHaveClass("brd-bottom");
      expect(box).toHaveClass("h-5");
      expect(box).toHaveClass("box-large");
    });
  });
});

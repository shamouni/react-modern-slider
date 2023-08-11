import { ReactNode } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "../index.css";

import { useEffect } from "react";

let Handle: any;
const gap = 2;

type TProps = {
  children: ReactNode;
  delay?: number;
};

export const Slider = (props: TProps) => {
  const { delay = 0 } = props;
  const time = delay > 3000 ? delay : 3000;

  useEffect(() => {
    if (delay) {
      initialize();
    }

    return () => {
      unbind();
    };
    // eslint-disable-next-line
  }, []);

  const initialize = () => {
    const container = document.querySelector(
      ".slider-container"
    ) as HTMLDivElement;

    window.addEventListener("load", startSlider);
    window.addEventListener("resize", startSlider);

    window.addEventListener("blur", () => clearTimeout(Handle));
    window.addEventListener("focus", startSlider);

    container.addEventListener("mouseenter", () => clearTimeout(Handle));
    container.addEventListener("mouseleave", startSlider);

    const prev = document.getElementById("prev-slide") as HTMLElement;
    const next = document.getElementById("next-slide") as HTMLElement;

    prev.addEventListener("click", () => slide("prev", false));
    next.addEventListener("click", () => slide("next", false));
  };

  const unbind = () => {
    window.removeEventListener("load", startSlider);
    window.removeEventListener("resize", startSlider);

    window.removeEventListener("blur", () => clearTimeout(Handle));
    window.removeEventListener("focus", startSlider);
  };

  const slide = (dir = "next", loop = true) => {
    const slider = document.querySelector(
      ".scroll-container"
    ) as HTMLDivElement;

    const slideWidth = window.screen.availWidth / 1.1;

    const l = slider.scrollLeft;
    const scrollEnd = slider.scrollWidth - slider.offsetWidth;

    if (dir === "next") {
      slider.scrollLeft = l + gap < scrollEnd ? l + slideWidth : 0;
    } else {
      slider.scrollLeft = l - gap > 0 ? l - slideWidth : slider.scrollWidth;
    }

    clearTimeout(Handle);

    if (loop) {
      Handle = setTimeout(slide, time);
    }
  };

  function startSlider() {
    clearTimeout(Handle);

    if (window.screen.availWidth > 1200) {
      Handle = setTimeout(slide, time);
    }
  }

  return (
    <section className="slider">
      <div id="prev-slide" className="arrow-slide"></div>

      <div id="slides" className="slider-container">
        <ScrollContainer className="scroll-container">
          {props.children}
        </ScrollContainer>
      </div>

      <div id="next-slide" className="arrow-slide"></div>
    </section>
  );
};

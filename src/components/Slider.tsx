import { ReactNode, useEffect, useRef, useCallback } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "../index.css";

type TProps = {
  children: ReactNode;
  delay?: number;
};

export const Slider = ({ children, delay = 0 }: TProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const time = delay > 3000 ? delay : 3000;
  const gap = 2;

  const slide = useCallback(
    (dir: "next" | "prev" = "next", loop = true) => {
      const slider = scrollContainerRef.current;
      if (!slider) return;

      const slideWidth = window.innerWidth / 1.1;
      const l = slider.scrollLeft;
      const scrollEnd = slider.scrollWidth - slider.offsetWidth;

      if (dir === "next") {
        slider.scrollLeft = l + gap < scrollEnd ? l + slideWidth : 0;
      } else {
        slider.scrollLeft = l - gap > 0 ? l - slideWidth : slider.scrollWidth;
      }

      if (timerRef.current) clearTimeout(timerRef.current);

      if (loop) {
        timerRef.current = setTimeout(() => slide("next"), time);
      }
    },
    [time]
  );

  const startSlider = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (window.innerWidth > 1200) {
      timerRef.current = setTimeout(() => slide("next"), time);
    }
  }, [slide, time]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleBlur = () => timerRef.current && clearTimeout(timerRef.current);

    window.addEventListener("resize", startSlider);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", startSlider);

    container.addEventListener("mouseenter", handleBlur);
    container.addEventListener("mouseleave", startSlider);

    startSlider();

    return () => {
      window.removeEventListener("resize", startSlider);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", startSlider);

      container.removeEventListener("mouseenter", handleBlur);
      container.removeEventListener("mouseleave", startSlider);

      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startSlider]);

  return (
    <section className="slider">
      <button
        className="arrow-slide"
        role="button"
        aria-label="prev"
        onClick={() => slide("prev", false)}
      />

      <div ref={containerRef} className="slider-container">
        <div ref={scrollContainerRef}>
          <ScrollContainer className="scroll-container">
            {children}
          </ScrollContainer>
        </div>
      </div>

      <button
        className="arrow-slide"
        role="button"
        aria-label="next"
        onClick={() => slide("next", false)}
      />
    </section>
  );
};

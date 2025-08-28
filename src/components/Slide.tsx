type TProps = {
  title: string;
  text?: string;
  src: string;
  link?: string;
  lbl: string;
  color: "red" | "green" | "blue" | "sky" | "pink" | "purple" | string;
  fontSize?: "small" | "large";
  height?: "3" | "4" | "5" | "6" | "7";
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
};

export const Slide = (props: TProps) => {
  const {
    height,
    title = "",
    text = "",
    src = "",
    link = "#",
    lbl = "",
    color = "",
    fontSize = "small",
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
  } = props;

  let borders = [];
  if (borderTop) {
    borders.push("brd-top");
  }
  if (borderBottom) {
    borders.push("brd-bottom");
  }
  if (borderLeft) {
    borders.push("brd-left");
  }
  if (borderRight) {
    borders.push("brd-right");
  }
  const brd = borders.join(" ");

  const hc = height ? `h-${height}` : "";
  const fc = fontSize === "large" ? "box-large" : "";

  return (
    <div className={`box brd ${hc} ${brd} ${fc}`}>
      <img width="960" height="615" src={`${src}`} alt="" role="img" />
      <a className="link" href={link}>
        {" "}
      </a>
      <div className="text">
        <span className={`lbl ${color}`}>{lbl}</span>
        <h4 className="bold">
          <a href={link}>{title}</a>
        </h4>
        {text !== "" && <p>{text}</p>}
      </div>
    </div>
  );
};

export default Slide;

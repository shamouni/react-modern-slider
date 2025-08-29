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
    title,
    text = "",
    src,
    link = "#",
    lbl,
    color,
    fontSize = "small",
    height,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
  } = props;

  const borderClasses = [
    borderTop && "brd-top",
    borderBottom && "brd-bottom",
    borderLeft && "brd-left",
    borderRight && "brd-right",
  ]
    .filter(Boolean)
    .join(" ");

  const heightClass = height ? `h-${height}` : "";
  const fontClass = fontSize === "large" ? "box-large" : "";

  return (
    <div className={`box brd ${heightClass} ${borderClasses} ${fontClass}`}>
      <img width={960} height={615} src={src} alt={title} role="img" />

      {link && <a className="link" href={link} aria-label={title}></a>}

      <div className="text">
        <span className={`lbl ${color}`}>{lbl}</span>
        <h4 className="bold">{link ? <a href={link}>{title}</a> : title}</h4>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default Slide;

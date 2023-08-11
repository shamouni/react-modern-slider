import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  width: "3" | "4" | "5" | "6";
};

export const VBox = (props: TProps) => {
  const { width } = props;

  return <div className={`col h-100 col-${width}`}>{props.children}</div>;
};

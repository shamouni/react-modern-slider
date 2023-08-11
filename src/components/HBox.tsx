import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  height: "3" | "4" | "5" | "6" | "7";
};

export const HBox = (props: TProps) => {
  const { children, height = "3" } = props;

  return <div className={`col-group h-${height}`}>{children}</div>;
};

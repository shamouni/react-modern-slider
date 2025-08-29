import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  height?: "3" | "4" | "5" | "6" | "7";
};

export const HBox = ({ children, height = "3" }: TProps) => {
  return <div className={`col-group h-${height}`}>{children}</div>;
};

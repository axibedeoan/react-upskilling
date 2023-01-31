import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import "./button.scss";

type ButtonProps = {
  children: string | JSX.Element;
};

export function Button({ children }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;

  return <button className={className}>{children}</button>;
}

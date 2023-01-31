import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import "./panel.scss";

type PanelProps = {
  title: string;
  children: string | JSX.Element | JSX.Element[];
};

export function Panel({ title, children }: PanelProps) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

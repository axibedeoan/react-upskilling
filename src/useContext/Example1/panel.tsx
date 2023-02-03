import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import styles from "/.styles.module.scss";
import cx from "classnames";

type PanelProps = {
  title: string;
  children: string | JSX.Element | JSX.Element[];
};

export function Panel({ title, children }: PanelProps) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <div className={cx(styles.panel)}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

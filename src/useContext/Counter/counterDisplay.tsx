import React, { useContext } from "react";
import { CounterContext } from "./counterContext";

export function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return <div>{count}</div>;
}

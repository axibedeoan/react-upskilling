import React from "react";
import { useCounterContext } from "./counterContext";

export function CounterDisplay() {
  const { count } = useCounterContext();

  return <div>{count}</div>;
}

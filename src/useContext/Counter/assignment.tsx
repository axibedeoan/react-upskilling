import React, { useState } from "react";
import { CounterContext } from "./counterContext";
import { Counter } from "./counter";
import { CounterDisplay } from "./counterDisplay";

export function Assignment() {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
      <CounterDisplay />
    </CounterContext.Provider>
  );
}

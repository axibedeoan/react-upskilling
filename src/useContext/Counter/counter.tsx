import React, { useContext, useState } from "react";
import { CounterContext } from "./counterContext";

export function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

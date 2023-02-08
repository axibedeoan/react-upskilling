import React from "react";
import { useCounterContext } from "./counterContext";

export function Counter() {
  const { decrementCount, incrementCount } = useCounterContext();

  // function handleIncrement() {
  //   console.log("handleIncrement", count);
  //   setCount((current) => current + 1); // what's the difference between setCount(current => current + 1) and setCount(count + 1)
  //   using (current => current + 1) helps when we have async operations
  // }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

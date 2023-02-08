import React, { useReducer } from "react";
import { CounterContext } from "./counterContext";
import { Counter } from "./counter";
import { CounterDisplay } from "./counterDisplay";
import { counterReducer } from "./counterReducer";

export function Assignment() {
  // why useReducer? - can handle objects and arrays
  //                 - can handle many state transitions
  //                 - better to use as global state

  // const [count, setCount] = useState(0); // how is the initial state used? - the count variable is initialized with the initial state (0)
  //                                           when the Assignment component is first rendered

  const [count, dispatch] = useReducer(counterReducer, 0);

  const incrementCount = () => {
    dispatch({ type: "increment" });
  };

  const decrementCount = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <CounterContext.Provider value={{ count, incrementCount, decrementCount }}>
      <Counter />
      <CounterDisplay />
    </CounterContext.Provider>
  );
}

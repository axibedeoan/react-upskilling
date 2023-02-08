import { createContext, useContext } from "react";

type CounterContextProps = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

export const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

// throw an error when we try to use the context without the provider
export function useCounterContext() {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("CounterContext Provider is missing");
  }

  return context;
}

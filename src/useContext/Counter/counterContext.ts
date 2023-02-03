import React, { createContext, SetStateAction } from "react";

type CounterContextProps = {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
};

export const CounterContext = createContext({} as CounterContextProps);

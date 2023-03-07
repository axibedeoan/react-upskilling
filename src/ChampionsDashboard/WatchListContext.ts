import React, { createContext, SetStateAction } from "react";

type WatchListContextProps = {
  watchList: any[];
  setWatchList: React.Dispatch<SetStateAction<any[]>>;
};

export const WatchListContext = createContext({} as WatchListContextProps);

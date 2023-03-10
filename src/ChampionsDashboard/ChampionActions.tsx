import React, { useContext } from "react";
import { WatchListContext } from "./WatchListContext";
import { Champion } from "./utils";

type ChampionActionsProps = {
  champion: Champion;
};

export function ChampionActions({ champion }: ChampionActionsProps) {
  const { watchList, setWatchList } = useContext(WatchListContext);

  const isInWatchList = (id: number) => {
    return watchList.find((champ) => champ.id === id);
  };

  const handleAdd = (champion: any) => {
    setWatchList([champion, ...watchList]);
  };

  const handleRemove = (id: number) => {
    setWatchList(watchList.filter((champ) => champ.id !== id));
  };

  return (
    <>
      {!isInWatchList(champion.id) && (
        <button onClick={() => handleAdd(champion)}>add</button>
      )}
      {isInWatchList(champion.id) && (
        <button onClick={() => handleRemove(champion.id)}>remove</button>
      )}
    </>
  );
}

import React, { useContext } from "react";
import { ChampionCard } from "./Champion";
import { WatchListContext } from "./WatchListContext";

type ChampionsListProps = {
  list: any[];
};

export function ChampionsList({ list }: ChampionsListProps) {
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
      {list.map((l) => (
        <>
          <ChampionCard champion={l} />
          {!isInWatchList(l.id) && (
            <button onClick={() => handleAdd(l)}>add</button>
          )}
          {isInWatchList(l.id) && (
            <button onClick={() => handleRemove(l.id)}>remove</button>
          )}
        </>
      ))}
    </>
  );
}

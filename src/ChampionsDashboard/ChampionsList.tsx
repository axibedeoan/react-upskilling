import React from "react";
import { ChampionCard } from "./ChampionCard";

type ChampionsListProps = {
  list: any[];
};

export function ChampionsList({ list }: ChampionsListProps) {
  return (
    <>
      {list.map((l) => (
        <>
          <ChampionCard champion={l} />
        </>
      ))}
    </>
  );
}

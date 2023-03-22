import React from "react";
import { ChampionCard } from "./ChampionCard";
import { Champion } from "./utils";
import "./ChampionsList.scss";

type ChampionsListProps = {
  list: Champion[];
};

export function ChampionsList({ list }: ChampionsListProps) {
  return (
    <div className={"champions-list-container"}>
      {list.map((l) => (
        <>
          <ChampionCard champion={l} />
        </>
      ))}
    </div>
  );
}

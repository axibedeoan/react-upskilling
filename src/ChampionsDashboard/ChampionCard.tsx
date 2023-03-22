import React from "react";
import { Champion } from "./utils";
import { ChampionActions } from "./ChampionActions";
import { ChampionDetails } from "./ChampionDetails";
import "./ChampionCard.scss";

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <div className={"champion-card"}>
      <img
        className={"champion-img"}
        src={champion.big_image_url}
        alt={champion.name}
      />
      <div className={"champion-name"}>{champion.name}</div>
      <ChampionDetails />
      <ChampionActions champion={champion} />
    </div>
  );
}

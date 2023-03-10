import React, { useContext } from "react";
import { Champion } from "./utils";
import { ChampionActions } from "./ChampionActions";
import { ChampionDetails } from "./ChampionDetails";

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <div>
      <p>
        Champion {champion.id} {champion.name}
      </p>
      <ChampionDetails />
      <ChampionActions champion={champion} />
    </div>
  );
}

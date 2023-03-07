import React, { useContext } from "react";
import { Champion } from "./utils";

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <div>
      <p>
        Champion {champion.id} {champion.name}
      </p>
    </div>
  );
}

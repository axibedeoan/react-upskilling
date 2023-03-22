import React, { useState } from "react";
import { Champion, championDetails } from "./utils";

type SortChampionsProps = {
  list: Champion[];
  setList: any;
  attribute: string;
};

export function SortChampions({
  list,
  attribute,
  setList,
}: SortChampionsProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSort = (list: Champion[], attribute: string) => {
    const sortById = [...list];
    if (championDetails.includes(attribute)) {
      // @ts-ignore
      sortById.sort((a, b) => a[attribute] - b[attribute]);
    } else {
      // @ts-ignore
      sortById.sort((a, b) => b[attribute] - a[attribute]);
    }

    setList(sortById);
    setInputValue("");
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => handleSort(list, inputValue)}>Sort</button>
    </>
  );
}

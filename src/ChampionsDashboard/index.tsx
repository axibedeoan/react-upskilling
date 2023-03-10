import React, { useEffect, useState } from "react";
import { ChampionsList } from "./ChampionsList";
import { WatchListContext } from "./WatchListContext";

export function ChampionsDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [watchList, setWatchList] = useState<any[]>([]);
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<string>("Champions List");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const url = `https://api.pandascore.co/lol/champions?sort=&page=${currentPage}&per_page=25&token=32Z07SHHYAwfWC7JEvbwWWk7LEHUUc29rIaexmkwm5P3ZIxmJj4`;

  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [currentPage]);

  const searchChampion = (name: string) => {
    const url = `https://api.pandascore.co/lol/champions?sort=&search[name]=${name}&page=1&per_page=25&token=32Z07SHHYAwfWC7JEvbwWWk7LEHUUc29rIaexmkwm5P3ZIxmJj4`;
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  const sortChampions = (type: string) => {
    const sortById = [...data];
    if (type === "asc") sortById.sort((a, b) => a.id - b.id);
    else sortById.sort((a, b) => b.id - a.id);
    setData(sortById);
  };

  const onListChange = (e: any) => {
    setList(e.target.value);
  };

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      <div>Watch list {watchList.length}</div>
      <button onClick={() => sortChampions("asc")}>sort asc</button>
      <button onClick={() => sortChampions("desc")}>sort desc</button>
      <input
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
          searchChampion(e.target.value);
        }}
      />
      <input
        type={"radio"}
        checked={list === "Champions List"}
        value={"Champions List"}
        onChange={onListChange}
      />
      Champions List
      <input
        type={"radio"}
        checked={list === "Watch List"}
        value={"Watch List"}
        onChange={onListChange}
      />
      Watch List
      {list === "Champions List" ? (
        <ChampionsList list={data} />
      ) : (
        <ChampionsList list={watchList} />
      )}
      <button onClick={() => setCurrentPage((current) => current - 1)}>
        Previous
      </button>
      <button onClick={() => setCurrentPage((current) => current + 1)}>
        Next
      </button>
    </WatchListContext.Provider>
  );
}

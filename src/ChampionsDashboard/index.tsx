import React, { useEffect, useState } from "react";
import { ChampionsList } from "./ChampionsList";
import { WatchListContext } from "./WatchListContext";
import getRequestData from "./api";
import { SortChampions } from "./SortChampions";

export function ChampionsDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [watchList, setWatchList] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<string>("Champions List");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const urlGet = `https://api.pandascore.co/lol/champions?sort=&page=${currentPage}&per_page=25&token=32Z07SHHYAwfWC7JEvbwWWk7LEHUUc29rIaexmkwm5P3ZIxmJj4`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    let getFetch = async () => {
      let res = await getRequestData(urlGet);
      setData(res);
    };
    getFetch();
  }, [currentPage]);

  const searchChampion = (name: string) => {
    const urlSearch = `https://api.pandascore.co/lol/champions?sort=&search[name]=${name}&page=1&per_page=25&token=32Z07SHHYAwfWC7JEvbwWWk7LEHUUc29rIaexmkwm5P3ZIxmJj4`;
    fetch(urlSearch, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  const onListChange = (e: any) => {
    setList(e.target.value);
  };

  console.log(data);

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList }}>
      <div>Watch list {watchList.length}</div>
      <SortChampions list={data} setList={setData} attribute={"armor"} />
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

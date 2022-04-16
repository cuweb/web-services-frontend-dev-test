import { useEffect, useState } from "react";
import Search from "./Search";
import List from "./List";
import useStorage from "../utils/useStorage";

const Heros = () => {
  // Set states
  const [heros, setHeros] = useState();
  const [search, setSearch] = useState({ term: false, result: [] });
  const [isLoading, setLoading] = useState(false);

  // Fetch Heros
  useEffect(() => {
    setLoading(true);
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setHeros(data);
        setLoading(false);
      });
  }, []);


  if (isLoading) return <p>Loading...</p>;
  if (!heros) return <p>No heros data</p>;

  return (
    <>
      <Search heros={heros} setSearch={setSearch} />
      <List heros={heros} search={search} />
    </>
  );
};

export default Heros;

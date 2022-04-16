import * as React from "react";
import styles from "../styles/Search.module.css";
import { Hero } from "../types";

type Props = {
  heros: Hero[];
  setHeros: any;
};

const Search = ({ heros, setHeros }: Props) => {

  // Filter Heros
  const filterHeros = (searchInput: string) => {
    const filterd = heros.filter((hero: Hero) => {
      return hero.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    // Set heros
    setHeros(filterd);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        name="search"
        placeholder="Search by Name"
        onChange={(e) => filterHeros(e.target.value)}
      />
    </div>
  );
};

export default Search;

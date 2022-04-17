import { useEffect, useState } from "react";
import { Hero } from "../types";
import styles from "../styles/Search.module.css";

type Props = {
  heros: Hero[];
  setSearch: any;
};

const Search = ({ heros, setSearch }: Props) => {
  // Filters Tags
  const [tagFilters, setTagFilters] = useState(["love", "hate"]);

  // Filters Heros
  const [heroFilter, setHeroFilter] = useState("");

  // Filter Heros
  useEffect(() => {
    const search = {
      term: heroFilter === "" ? false : heroFilter,
      result: heros.filter((hero: Hero) => {
        return hero.name.toLowerCase().includes(heroFilter.toLowerCase());
      }),
    };
    // Set heros
    setSearch(search);
  });

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          name="search"
          placeholder="Search by Name"
          onChange={(e) => setHeroFilter(e.target.value)}
        />
      </div>
      <div className={styles.searchTags}>
        {tagFilters.map((filter: any) => (
          <div className={styles.chip} key={`'filter-${filter.tag}`}>
            {filter.tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;

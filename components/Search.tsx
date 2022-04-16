import * as React from "react";
import styles from "../styles/Search.module.css";

type Props = {
  setSearch: any;
};

const Search = ({ setSearch }: Props) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        name="search"
        placeholder="Search by Name"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;

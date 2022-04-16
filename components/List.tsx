import * as React from "react";
import ListItem from "./ListItem";
import { Hero } from "../types";
import styles from "../styles/Heros.module.css";

type Props = {
  heros: Hero[];
  search: {
    term: boolean | string;
    result: Hero[];
  };
};

const List = ({ heros, search }: Props) => {
  // Check if data is from search result
  const records: Hero[] = search.term ? search.result : heros;

  return (
    <div className={styles.scroller}>
      {records.map((hero) => (
        <ListItem data={hero} key={hero.id} />
      ))}
      {search.term && search.result.length < 1 ? "No results" : ""}
    </div>
  );
};

export default List;

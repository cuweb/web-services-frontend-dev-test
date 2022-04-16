import * as React from "react";
import ListItem from "./ListItem";
import { Hero } from "../types";
import styles from "../styles/Heros.module.css";

type Props = {
  heros: Hero[];
};

const List = ({ heros }: Props) => {
  return (
    <div className={styles.scroller}>
      {heros.map((hero) => (
        <ListItem data={hero} key={hero.id} />
      ))}
    </div>
  );
};

export default List;

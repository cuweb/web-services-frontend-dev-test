import ListItem from "./ListItem";
import { Hero } from "../types";
import styles from "../styles/Heros.module.css";

type Props = {
  heros: Hero[];
  search: {
    term: boolean | string;
    result: Hero[];
  };
  updateHeros: any;
};

const List = ({ heros, search, updateHeros }: Props) => {
  // Check if data is from search result
  const records: Hero[] = search.term ? search.result : heros;

  return (
    <div className={styles.scroller}>
      {records.map((hero) => (
        <ListItem hero={hero} key={hero.id} updateHeros={updateHeros} />
      ))}
      {search.term && search.result.length < 1 ? "No results" : ""}
    </div>
  );
};

export default List;

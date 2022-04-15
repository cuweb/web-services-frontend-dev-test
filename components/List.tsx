import * as React from "react";
import ListItem from "./ListItem";
import { Hero } from "../interfaces";

type Props = {
  items: Hero[];
};

const List = ({ items }: Props) => (
  <div>
    {items.map((item) => (
      <ListItem data={item} key={item.id} />
    ))}
  </div>
);

export default List;

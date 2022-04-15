import * as React from "react";
import { Hero } from "../types";

type Props = {
  item: Hero;
};

const ListDetail = ({ item: user }: Props) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Hero } from "../interfaces";

type Props = {
  data: Hero;
};

const ListItem = ({ data }: Props) => (
  <>
    <Image src={data.images.sm} alt={data.slug} width={160} height={240} />
    <h2>
      <Link href="/heros/[id]" as={`/heros/${data.id}`}>
        <a>{data.name}</a>
      </Link>
    </h2>
    <ul key={data.id}>
      <li>Fullname: {data.fullname}</li>
      <li>Race: {data.race}</li>
      <li>Alignment: {data.alignment}</li>
      <li>Publisher: {data.publisher}</li>
    </ul>
  </>
);

export default ListItem;

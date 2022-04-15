import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Hero } from "../types";

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
    <ul>
      <li>Fullname: {data.biography.fullName ?? "N/A"}</li>
      <li>Race: {data.appearance.race ?? "N/A"}</li>
      <li>Alignment: {data.biography.alignment ?? "N/A"}</li>
      <li>Publisher: {data.biography.publisher ?? "N/A"}</li>
    </ul>
  </>
);

export default ListItem;

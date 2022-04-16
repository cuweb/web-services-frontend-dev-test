import React from "react";
import Link from "next/link";
import Image from "next/image";
import useCollapse from "react-collapsed";

import { Hero } from "../types";
import styles from "../styles/Card.module.css";

type Props = {
  data: Hero;
};

const ListItem = ({ data }: Props) => {
  // Use collapase for power stats
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={styles.card}>
      <Image
        src={data.images.lg}
        alt={data.slug}
        width={160}
        height={240}
        className={styles.cardImage}
      />
      <div className={` ${styles.cardContent} ${styles["card-" + data.biography.alignment]}`}>
        <h2 className={styles.cardTitle}>
          <Link href="/heros/[id]" as={`/heros/${data.id}`}>
            <a>{data.name}</a>
          </Link>
        </h2>
        <div className={styles.cardData}>
          <ul>
            <li>Fullname: {data.biography.fullName ?? "N/A"}</li>
            <li>Race: {data.appearance.race ?? "N/A"}</li>
            <li>Alignment: {data.biography.alignment ?? "N/A"}</li>
            <li>Publisher: {data.biography.publisher ?? "N/A"}</li>
          </ul>
          <section {...getCollapseProps()}>
            <h3>Powers: </h3>
            <ul>
              <li>Intelligence: {data.powerstats.intelligence ?? 0}%</li>
              <li>Strength: {data.powerstats.strength ?? 0}%</li>
              <li>Speed: {data.powerstats.speed ?? 0}%</li>
              <li>Surability: {data.powerstats.durability ?? 0}%</li>
              <li>Power: {data.powerstats.power ?? 0}%</li>
              <li>Combat: {data.powerstats.combat ?? 0}%</li>
            </ul>
          </section>
        </div>
      </div>
      <div className={styles.cardButton}>
        <button {...getToggleProps()}>{isExpanded ? "-" : "+"}</button>
      </div>
    </div>
  );
};

export default ListItem;

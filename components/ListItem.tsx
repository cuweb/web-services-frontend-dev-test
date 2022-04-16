import Link from "next/link";
import Image from "next/image";
import useCollapse from "react-collapsed";

import { Hero } from "../types";
import styles from "../styles/Card.module.css";

type Props = {
  hero: Hero;
};


const ListItem = ({ hero }: Props) => {
  // Use collapase for power stats
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={styles.card}>
      <Image
        src={hero.images.lg}
        alt={hero.slug}
        width={160}
        height={240}
        className={styles.cardImage}
      />
      <div className={` ${styles.cardContent} ${styles["card-" + hero.biography.alignment]}`}>
        <h2 className={styles.cardTitle}>
          <Link href="/heros/[id]" as={`/heros/${hero.id}`}>
            <a>{hero.name}</a>
          </Link>
        </h2>
        <div className={styles.cardData}>
          <ul>
            <li>Fullname: {hero.biography.fullName ?? "N/A"}</li>
            <li>Race: {hero.appearance.race ?? "N/A"}</li>
            <li>Alignment: {hero.biography.alignment ?? "N/A"}</li>
            <li>Publisher: {hero.biography.publisher ?? "N/A"}</li>
          </ul>
          <section {...getCollapseProps()}>
            <h3>Powers: </h3>
            <ul>
              <li>Intelligence: {hero.powerstats.intelligence ?? 0}%</li>
              <li>Strength: {hero.powerstats.strength ?? 0}%</li>
              <li>Speed: {hero.powerstats.speed ?? 0}%</li>
              <li>Surability: {hero.powerstats.durability ?? 0}%</li>
              <li>Power: {hero.powerstats.power ?? 0}%</li>
              <li>Combat: {hero.powerstats.combat ?? 0}%</li>
            </ul>
            <section>
              <h4>Tags</h4>
              <div className={styles.cardAddTagButton}>
                <input type="text" name="tags" placeholder="Add tag" />
                <button>Add Tag</button>
              </div>
              <div className={styles.cardTags}>
                <div className={styles.chip}>
                  Love <span className={styles.chipRemove}>&times;</span>
                </div>
                <div className={styles.chip}>
                  Hate <span className={styles.chipRemove}>&times;</span>
                </div>
              </div>
            </section>
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

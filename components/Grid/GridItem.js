import Card from "../UI/Card/Card";
import Link from "next/link";
import Image from "next/image";
import styles from "./Grid.module.css";

const GridItem = (props) => {
  return (
    <Card className={`${styles.link} ${props.empty ? styles.empty : styles.full}`}>
      <Link href={`/${props.id}`}>
        <div>
          <div style={props.imageStyle} className={styles.image}>
            <Image src={props.image} alt={props.name} layout="fill" />
          </div>
          <p className={styles.description}>{props.name}</p>
          {props.children}
        </div>
      </Link>
    </Card>
  );
};

export default GridItem;

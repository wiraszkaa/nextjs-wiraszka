import Card from "../../UI/Card/Card";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

export default function CoalItem(props) {
  return (
    <Card className={props.empty ? styles.empty : styles.full}>
      <Link href={`/${props.coal.id}`}>
        <div>
          <div className={styles.image}>
            <Image
              src={props.coal.image}
              alt={props.coal.name}
              layout="fill"
            />
          </div>
          <p className={styles.description}>{props.coal.name}</p>
          {props.empty && (
            <p className={`${styles.description} ${styles.error}`}>
              Brak na składzie
            </p>
          )}
        </div>
      </Link>
    </Card>
  );
}

import Card from "../../UI/Card";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

export default function CoalItem(props) {
  return (
    <Card empty={props.empty}>
      <Link href={`/${props.coal.id}`}>
        <div>
          <div className={styles.image}>
            <Image src={props.coal.image} alt={props.coal.name} layout="fill" />
          </div>
          <p className={styles.description}>{props.coal.name}</p>
        </div>
      </Link>
    </Card>
  );
}

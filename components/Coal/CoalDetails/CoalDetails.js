import Image from "next/image";
import Link from "next/link";
import styles from "./CoalDetails.module.css";

export default function CoalDetails(props) {
  const coal = props.coal;

  let price = (
    <div className={styles.price}>
      <h1>Aktualnie brak na składzie</h1>
    </div>
  );

  if (coal.amount > 0) {
    price = (
      <div className={styles.price}>
        <h1>Cena: {coal.price} zł/t</h1>
        <p>Ilość na składzie: {coal.amount} t</p>
      </div>
    );
  }

  return (
    <div className={styles.coalDetails}>
      <h1>{coal.name}</h1>
      <div className={styles.image}>
        <Image src={coal.image} alt={coal.name} layout="fill" />
      </div>
      <p>Wielkość: {coal.size}</p>
      {price}
      {coal.amount > 0 && (
        <Link href="/kontakt">
          <button>Zamów</button>
        </Link>
      )}
    </div>
  );
}

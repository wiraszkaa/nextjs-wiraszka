import Link from "next/link";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <Link href={props.href}>
      <div className={styles.button}>
        <span>{props.children}</span>
        <div className={styles.liquid}/>
      </div>
    </Link>
  );
}

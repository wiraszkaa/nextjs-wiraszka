import Link from "next/link";
import Image from "next/image";
import cartIcon from "../../../assets/cart.png";
import styles from "./Button.module.css";
import { useState, useEffect } from "react";

export default function Button(props) {
  const [isIn, setIsIn] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsIn(true), 1000);
  }, []);

  return (
      <Link href={props.href}>
        <div className={`${styles.button} ${isIn ? "" : styles.enter} ${props.active ? styles.active : ""}`}>
          <span className={styles.text}>{props.children}</span>
          <div className={styles.cart}>
            <Image src={cartIcon} alt="Cart" layout="fill" />
          </div>
        </div>
      </Link>
  );
}

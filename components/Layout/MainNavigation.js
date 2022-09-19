import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./MainNavigation.module.css";
import wiraszka from "../../assets/wiraszka-grey.png";
import Button from "../UI/Button/Button";

function MainNavigation() {
  const { asPath } = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src={wiraszka} alt="Wiraszka" layout="fill" />
        </div>
      </Link>

      <ul>
        <li>
          <Button href="/" active={asPath === "/"}>
            Strona Główna
          </Button>
        </li>
        <li>
          <Button href="/kontakt" active={asPath === "/kontakt"}>
            Kontakt
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;

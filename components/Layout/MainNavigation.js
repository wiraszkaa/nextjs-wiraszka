import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import wiraszka from "../../assets/wiraszka-black.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          <Image src={wiraszka} alt="Wiraszka" layout="fill" />
        </div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/">Strona główna</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

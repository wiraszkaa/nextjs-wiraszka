import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import wiraszka from "../../assets/wiraszka-black.png";
import Button from "../UI/Button/Button";

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
            <Button href="/">Strona Główna</Button>
          </li>
          <li>
            <Button href="/kontakt">Kontakt</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

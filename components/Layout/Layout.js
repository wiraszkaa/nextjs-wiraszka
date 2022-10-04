import Image from "next/image";
import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";
import railway from "../../assets/railway.png";
import background from "../../assets/coal.jpg";

function Layout(props) {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.photo}>
          <Image src={background} alt="Background" layout="fill" />
        </div>
      </div>
      <MainNavigation />
      <div className={styles.rails}>
        <Image src={railway} alt="Railway" layout="fill" />
      </div>
      <main className={styles.main}>{props.children}</main>
    </>
  );
}

export default Layout;

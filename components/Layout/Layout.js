import Image from "next/image";
import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";
import railway from "../../assets/railway.png";
import background from "../../assets/coal.jpg";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className={styles.rails}>
        <Image src={railway} alt="Railway" width="1920px" height="30px" />
      </div>
      <main className={styles.main}>{props.children}</main>
      <div className={styles.background}>
        <Image src={background} alt="Background" layout="fill" />
      </div>
    </div>
  );
}

export default Layout;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import sandImage from "../../assets/sand.jpg";


export default function Pallets() {
  return (
    <>
      <Head>
        <title>Wiraszka Transport Materiałów Sypkich</title>
        <meta
          name="description"
          content="Wiraszka Transport Materiałów Sypkich"
        />
      </Head>
      <main className={styles.main}>
        <h1>Transport Materiałów Sypkich</h1>
        <div className={styles.image}>
          <Image src={sandImage} alt="Sypkie" layout="fill" />
        </div>

        <Link href="/kontakt">
          <button>Kontakt</button>
        </Link>
      </main>
    </>
  );
}

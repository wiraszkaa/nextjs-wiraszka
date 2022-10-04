import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import palletImage from "../../assets/pallet.jpg";

export default function Pallets() {
  return (
    <>
      <Head>
        <title>Wiraszka Transport Paletowy</title>
        <meta name="description" content="Wiraszka Transport Paletowy" />
      </Head>
      <main className={styles.main}>
        <h1>Transport Paletowy</h1>
        <div className={styles.image}>
          <Image src={palletImage} alt="Palety" layout="fill" />
        </div>

        <Link href="/kontakt">
          <button>Kontakt</button>
        </Link>
      </main>
    </>
  );
}

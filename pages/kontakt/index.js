import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import addressIcon from "../../assets/address.png";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Wiraszka Kontakt</title>
        <meta name="description" content="PHU MAJA MAREK WIRASZKA - KONTAKT" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Kontakt</h1>
        <Image src={phoneIcon} alt="Telefon" width={50} height={50} />
        <p className={styles.description}>+48 74 858 78 50</p>
        <Image src={mailIcon} alt="E-Mail" width={50} height={50} />
        <p className={styles.description}>m-maja1@wp.pl</p>
        <Image src={addressIcon} alt="Adres" width={50} height={50} />
        <p className={styles.description}>
          Nowy Jaworów 2, 58-140 Jaworzyna Śląska
        </p>
      </main>
    </div>
  );
}

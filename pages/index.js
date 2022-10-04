import Head from "next/head";
import GridItem from "../components/Grid/GridItem";
import styles from "../styles/Home.module.css";
import { MongoClient } from "mongodb";
import Grid from "../components/Grid/Grid";
import palletImage from "../assets/pallet.jpg";
import sandImage from "../assets/sand.jpg";

const transportList = [
  <GridItem
    key="0"
    id="sypkie"
    name="Materiały Sypkie"
    image={sandImage}
    imageStyle={{ filter: "grayscale(0.5)" }}
  />,
  <GridItem
    key="1"
    id="palety"
    name="Palety"
    image={palletImage}
    imageStyle={{ filter: "grayscale(0.5)" }}
  />,
];

export default function Home(props) {
  const coalTypes = props.coalTypes.sort(
    (item1, item2) => item2.amount - item1.amount
  );

  let coalList = coalTypes.map((coal) => (
    <GridItem
      key={coal.id}
      id={coal.id}
      image={coal.image}
      name={coal.name}
      empty={coal.amount === 0}
    >
      {coal.amount === 0 && (
        <p className={`${styles.description} ${styles.error}`}>
          Brak na składzie
        </p>
      )}
    </GridItem>
  ));

  return (
    <>
      <Head>
        <title>Wiraszka</title>
        <meta
          name="description"
          content="PHU MAJA MAREK WIRASZKA, TRANSPORT, SPEDYCJA, WULKANIZACJA, SKŁAD OPAŁU"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Witamy!</h1>

        <Grid
          title="Transport Krajowy i Międzynarodowy"
          description="Ponad 22 lata doświadczenia w branży transportowej."
          list={transportList}
        />
        <Grid title="Skład Opału" description="Węgiel najwyższej jakości z polskich kopalni." list={coalList} />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/wiraszkaa">
          Strona stworzona przez Jakuba Wiraszkę
        </a>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const client = MongoClient.connect(
    `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.qfdnlmi.mongodb.net/coal?retryWrites=true&w=majority`
  );
  const db = (await client).db();

  const coalTypeCollection = db.collection("coalTypes");

  const coalList = await coalTypeCollection.find().toArray();

  (await client).close();

  return {
    props: {
      coalTypes: coalList.map((coal) => ({
        name: coal.name,
        image: coal.image,
        size: coal.size,
        price: coal.price,
        amount: coal.amount,
        id: coal._id.toString(),
      })),
    },
  };
}

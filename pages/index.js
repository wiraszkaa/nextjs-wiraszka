import Head from "next/head";
import CoalItem from "../components/Coal/CoalItem/CoalItem";
import styles from "../styles/Home.module.css";
import { MongoClient } from "mongodb";

export default function Home(props) {
  const coalTypes = props.coalTypes.sort(
    (item1, item2) => item2.amount - item1.amount
  );

  let coalList = coalTypes.map((coal) => (
    <CoalItem key={coal.id} coal={coal} empty={coal.amount === 0} />
  ));

  return (
    <div className={styles.container}>
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

        <h1>Skład Opału</h1>
        <div className={styles.grid}>{coalList}</div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/wiraszkaa">
          Strona stworzona przez Jakuba Wiraszkę
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
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
    revalidate: 1,
  };
}

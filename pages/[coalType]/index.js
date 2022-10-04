import Head from "next/head";
import CoalDetails from "../../components/CoalDetails/CoalDetails";
import { MongoClient } from "mongodb";

export default function Coal(props) {
  return (
    <>
      <Head>
        <title>{`Wiraszka ${props.coal.name}`}</title>
        <meta
          name="description"
          content={`PHU MAJA MAREK WIRASZKA ${props.coal.name}`}
        />
      </Head>
      <CoalDetails coal={props.coal} />
    </>
  );
}

export async function getStaticPaths() {
  const client = MongoClient.connect(
    "mongodb+srv://wiraszkaa:yIiDL2tPw7MdH0ug@cluster0.qfdnlmi.mongodb.net/coal?retryWrites=true&w=majority"
  );
  const db = (await client).db();
  const coalTypesCollection = db.collection("coalTypes");
  const coalTypes = await coalTypesCollection.find({}, { _id: 1 }).toArray();
  (await client).close();

  return {
    fallback: 'blocking',
    paths: coalTypes.map((coal) => ({
      params: {
        coalType: coal._id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  const coalType = context.params.coalType;

  const client = MongoClient.connect(
    `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.qfdnlmi.mongodb.net/coal?retryWrites=true&w=majority`
  );
  const db = (await client).db();
  const coalTypeCollection = db.collection("coalTypes");
  const coal = await coalTypeCollection.findOne({_id: coalType});
  (await client).close();

  return { props: { coal } };
}

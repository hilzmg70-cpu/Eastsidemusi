
import Head from "next/head";
import { getArtist } from "../../lib/wordpress";

export default function Artist({ artist }: any) {
  return (
    <>
      <Head>
        <title>{artist?.title?.rendered} | EastSide Music</title>
      </Head>
      <h1>{artist?.title?.rendered}</h1>
      <p>{artist?.acf?.bio}</p>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const artist = await getArtist(params.slug);
  return { props: { artist } };
}

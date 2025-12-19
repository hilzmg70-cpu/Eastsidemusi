
import Head from "next/head";
import { getTrack } from "../../lib/wordpress";

export default function Track({ track }: any) {
  return (
    <>
      <Head>
        <title>{track?.title?.rendered} | EastSide Music</title>
      </Head>
      <h1>{track?.title?.rendered}</h1>
      <audio controls src={track?.acf?.audio_file} />
      <a href={track?.acf?.download_url} className="download-btn">
        Download MP3
      </a>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const track = await getTrack(params.slug);
  return { props: { track } };
}

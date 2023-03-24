import { createClient } from "contentful";
import Head from "next/head";
import Hero from "@/components/index/Hero";
import Gallery from "@/components/Gallery";
import ProductStack from "@/components/index/ProductStack";
import BestAudio from "@/components/layout/BestAudio";

export async function getStaticProps() {
  console.log("Executing getStaticProps");

  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENT_DELIVERY_TOKEN,
  });

  let imgURLs = {};
  let assets = {};

  try {
    await client
      .getAssets({ limit: 1000 })
      .then((response) => {
        assets = response.items;
      })
      .catch(console.error);

    //
    const [desktop, tablet, mobile] = await Promise.all([
      //BestAudio images
      client.getAsset("3uIGgrCDgySKW5tljIfncv"),
      client.getAsset("1nkmfthd1HXMIFxqpxrbya"),
      client.getAsset("2DTUz7xbHLnQqDxbygtRWA"),
    ]);

    imgURLs = { desktop, tablet, mobile };
    console.log("BestAudio assets loaded successfully");
  } catch (error) {
    console.error("Error loading BestAudio assets");
  }

  return { props: { imgURLs, assets } };
}

export default function Home({ imgURLs, assets }) {
  // console.log(assets);
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero assets={assets}></Hero>
      <Gallery assets={assets} />
      <ProductStack assets={assets} />
      <BestAudio imgURLs={imgURLs} />
    </>
  );
}

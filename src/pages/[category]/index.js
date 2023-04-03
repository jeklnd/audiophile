import React from "react";
import BestAudio from "@/components/layout/BestAudio.jsx";
import Gallery from "@/components/Gallery.jsx";
import { createClient } from "contentful";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ProductCard from "@/components/category-pages/ProductCard";
import Head from "next/head"
import Navbar from "@/components/navigation/Navbar";
import logo from "/public/shared-desktop-logo.svg";


export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "headphones" } },
      { params: { category: "speakers" } },
      { params: { category: "earphones" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENT_DELIVERY_TOKEN,
  });

  let assets = {};
  let products = {};
  let headphones = {};
  let speakers = {};
  let earphones = {};

  await client
    .getAssets({ limit: 1000 })
    .then((response) => {
      assets = response.items;
    })
    .catch(console.error);

  await client
    .getEntries({ limit: 1000, "metadata.tags.sys.id[all]": "headphones" })
    .then((response) => {
      headphones = response.items;
    })
    .catch(console.error);

  await client
    .getEntries({ limit: 1000, "metadata.tags.sys.id[all]": "speakers" })
    .then((response) => {
      speakers = response.items;
    })
    .catch(console.error);

  await client
    .getEntries({ limit: 1000, "metadata.tags.sys.id[all]": "earphones" })
    .then((response) => {
      earphones = response.items;
    })
    .catch(console.error);

  return { props: { assets, headphones, speakers, earphones } };
}

export default function Product({ assets, headphones, speakers, earphones }) {
  const router = useRouter();
  const { category } = router.query;
  const title = `${category.charAt(0).toUpperCase()}${category.slice(1)}`
  // console.log(title)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={category.toUpperCase()} />
      </Head>
      <Navbar logo={logo} assets={assets}></Navbar>
      <Box
        sx={{
          backgroundColor: ["#0f0f0f", "#0f0f0f", "#141414"],
          height: ["100px", "240px"],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
          {category}
        </Typography>
      </Box>
      {(() => {
        if (category === "headphones") {
          return <ProductCard products={headphones} category={category} />;
        } else if (category === "speakers") {
          return <ProductCard products={speakers} category={category} />;
        } else {
          return <ProductCard products={earphones} category={category} />;
        }
      })()}

      <Gallery assets={assets} />
      <BestAudio assets={assets} />
    </>
  );
}

import React from "react";
import BestAudio from "@/components/layout/BestAudio.jsx";
import Gallery from "@/components/Gallery.jsx";
import { createClient } from "contentful";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "headphones" } },
      { params: { slug: "speakers" } },
      { params: { slug: "earphones" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENT_DELIVERY_TOKEN,
  });

  let assets = {};

  await client
    .getAssets({ limit: 1000 })
    .then((response) => {
      assets = response.items;
    })
    .catch(console.error);

  return { props: { assets } };
}

export default function Product({ assets }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
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
          {slug}
        </Typography>
      </Box>
      <Gallery assets={assets} />
      <BestAudio assets={assets} />
    </>
  );
}

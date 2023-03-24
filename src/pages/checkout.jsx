import React from "react";
import Head from "next/head";
import { Container, Grid, Box } from "@mui/material";
import GoBack from "@/components/checkout/GoBack";
import CheckoutCard from "@/components/checkout/CheckoutCard";
import SummaryCard from "@/components/checkout/SummaryCard";
import { createClient } from "contentful";

// getStaticProps MUST be exported from a page
export async function getStaticProps() {
    // console.log("Executing getStaticProps");
    const client = createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.CONTENT_DELIVERY_TOKEN,
    });

    let fileUrl;
    let width;
    let height;

    const asset = await client
        .getAsset("ewhUS2iIOihTjxFIoA4kB")
        .then((asset) => {
            // console.log(asset.fields.file.details.image);
            fileUrl = `https:${asset.fields.file.url}`;
            width = asset.fields.file.details.image.width;
            height = asset.fields.file.details.image.height;
        })
        .catch((error) => console.log(error));

    return { props: { fileUrl, width, height } };
}

export default function Checkout({ fileUrl, width, height }) {
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <Box sx={{ backgroundColor: "#fafafa" }}>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingBottom: "6rem",
                    }}
                >
                    <GoBack />
                    <Grid
                        container
                        rowSpacing={4}
                        justifyContent="center"
                        columnSpacing={{ md: 4 }}
                    >
                        <Grid item xs={12} sm={12} md={8}>
                            <CheckoutCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <SummaryCard
                                fileUrl={fileUrl}
                                width={width}
                                height={height}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

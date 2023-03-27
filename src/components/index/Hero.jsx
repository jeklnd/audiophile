import React from "react";
import { Typography, Button, Container, Box, Grid } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Hero({ assets }) {
  const findAssetById = (assets, id) => assets.find((obj) => obj.sys.id === id);

  const images = {
    xx99ii: "1n1RklAFH3OBtIo6dD6aEe",
    xx99iiTablet: "7bPWwMlPtXsrZVXt4gAs4Q",
    xx99iiMobile: "6jMF0h9OIcSFdO7dNpLpbM",
  };

  const [xx99ii, xx99iiTablet, xx99iiMobile] = Object.values(images).map((id) =>
    findAssetById(assets, id)
  );

  const [xs, sm, md, lg] = [
    useMediaQuery("(max-width: 300px)"),
    useMediaQuery("(max-width: 600px)"),
    useMediaQuery("(max-width: 900px)"),
    useMediaQuery("(min-width: 900px)"),
  ];
  return (
    <Box
      sx={{
        backgroundColor: ["#0f0f0f", "#0f0f0f", "#141414"],
        height: ["511px", "640px"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: ["2.5rem", "6rem", "7.5rem"],
        backgroundImage: (() => {
          if (xs || sm) {
            return `url(https:${xx99iiMobile.fields.file.url})`;
          } else if (md) {
            return `url(https:${xx99iiTablet.fields.file.url})`;
          } else {
            return "none";
          }
        })(),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Container sx={{ color: "#fff" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: ["center", "center", "space-around"],
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={9}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: ["center", "center", "flex-start"],
              gap: "1.5rem",
              position: ["absolute", "absolute", "static"],
              zIndex: 1,
              textAlign: ["center", "center", "left"],
            }}
          >
            <Typography
              variant="overline"
              sx={{ textTransform: "uppercase", color: "#898989" }}
            >
              NEW PRODUCT
            </Typography>
            <Typography variant="h1" sx={{ textTransform: "uppercase" }}>
              XX99 Mark II Headphones
            </Typography>
            <Typography variant="body" sx={{ color: "#c4c4c4" }}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "14px",
                width: "160px",
                height: "48px",
                borderRadius: 0,
                boxShadow: "none",
                backgroundColor: "#d87d4a",
                "&:hover": { backgroundColor: "#fbaf85", boxShadow: "none" },
              }}
              href={"/headphones/xx99-mark-ii-headphones"}
            >
              SEE PRODUCT
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ height: "618px" }}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                display: ["none", "none", "block"],
              }}
            >
              <Image
                src={`https:${xx99ii.fields.file.url}`}
                alt="xx99 Mark II headphones"
                fill
                priority
                style={{ objectFit: "contain" }}
                // height="618"
                // width="584"
              ></Image>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

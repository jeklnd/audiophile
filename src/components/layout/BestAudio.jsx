/**
 * Concepts: mui, rfc, props, mui sx prop responsive values, CSS grid, responsive images with <picture>, jsDocs
 */

import { Container, Typography, Grid } from "@mui/material";

export default function BestAudioGear({ assets }) {
  const findAssetById = (assets, id) => assets.find((obj) => obj.sys.id === id);

  const images = {
    mobile: "2DTUz7xbHLnQqDxbygtRWA",
    tablet: "1nkmfthd1HXMIFxqpxrbya",
    desktop: "2DTUz7xbHLnQqDxbygtRWA",
  };

  const [mobile, tablet, desktop] = Object.values(images).map((id) =>
    findAssetById(assets, id)
  );
  return (
    <Container>
      <Grid
        container
        rowGap={{ xs: "2.5rem", sm: "4rem", md: 0 }}
        sx={{
          margin: ["7.5rem 0", "7.5rem 0", "10rem 0"],
          justifyContent: { md: "space-between" },
          textAlign: ["center", "center", "left"],
        }}
      >
        <Grid item xs={12} sm={12} md={6} order={{ md: 2 }}>
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet={`https:${mobile.fields.file.url}`}
            />
            <source
              media="(max-width: 900px)"
              srcSet={`https:${tablet.fields.file.url}`}
            ></source>
            <source
              media="(min-width: 900px)"
              srcSet={`https:${desktop.fields.file.url}`}
            ></source>
            <img
              src={`https:${mobile.fields.file.url}`}
              alt="man wearing Audiphile headphones"
              style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
            ></img>
          </picture>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { sm: "0 3.5rem", md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textTransform: "uppercase",
              paddingBottom: ["1rem", "2rem"],
            }}
          >
            Bringing you the <span style={{ color: "#d87d4a" }}>best</span>{" "}
            audio gear.
          </Typography>
          <Typography sx={{ color: "#7d7d7d" }}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

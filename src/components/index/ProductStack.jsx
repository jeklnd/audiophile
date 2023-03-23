import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Stack,
  Box,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import styles from "./ProductStack.module.css";

import zx9 from "public/assets/home/desktop/home-desktop-speaker-zx9.png";
import yx1 from "public/assets/home/desktop/home-desktop-earphones-yx1.jpg";
import testJawn from "public/assets/product-zx9-speaker/desktop/product-zx9-speaker-desktop-product-removebg-preview.png";
import testJawn2 from "public/assets/product-zx9-speaker/desktop/product-zx9-speaker-desktop-product.png";

export default function ProductStack({ assets }) {
  const findAssetById = (assets, id) => assets.find((obj) => obj.sys.id === id);

  const images = {
    zx9: "1dsQVjFiE15nI4WAkfb3pg",
    circles: "2KUP6gcPMQTOA3mTQjgV3C",
    zx7Mobile: "6bGVx73n8QOphzxziKHe7H",
    zx7Tablet: "1NqO9HMRJIbuzRagu0n61R",
    zx7Desktop: "5Di7jYg3c9ADc20t4GQCUD",
    yx1Mobile: "5IEXdxl3Y1IZ4gOxYZObDF",
    yx1Tablet: "6KQdv9XP8C6RQHutNkr2uB",
    yx1Desktop: "2HOe98FrDng3XCYnO0jPiX",
  };

  const [
    zx9,
    circles,
    zx7Mobile,
    zx7Tablet,
    zx7Desktop,
    yx1Mobile,
    yx1Tablet,
    yx1Desktop,
  ] = Object.values(images).map((id) => findAssetById(assets, id));

  const [xs, sm, md, lg] = [
    useMediaQuery("(max-width: 300px)"),
    useMediaQuery("(max-width: 600px)"),
    useMediaQuery("(max-width: 900px)"),
    useMediaQuery("(min-width: 900px)"),
  ];

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#d87d4a",
            backgroundImage: circles.src,
            borderRadius: "8px",
            marginBottom: ["1.5rem", "2rem"],
          }}
        >
          <Card
            elevation={0}
            sx={{ border: "none", backgroundColor: "transparent" }}
          >
            <CardContent
              sx={{
                color: "#fff",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: ["column", "column", "row"],
                height: "560px",
                position: "relative",
              }}
            >
              <Box className={styles.imgWrapper}>
                <Image
                  src={circles.fields.file.url}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    // objectPosition: desktop && "50% 50%",
                  }}
                ></Image>

                <Image
                  src={`https:${zx9.fields.file.url}`}
                  alt="zx9 headphones image"
                  fill
                  style={{
                    objectFit: md ? "contain" : "cover",
                  }}
                />
              </Box>
              <Stack
                spacing={3}
                sx={{
                  paddingBottom: ["1.5rem", "2.5rem"],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h1">ZX9 SPEAKER</Typography>
                <Typography>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </Typography>
                <Button variant="contained" className={styles.contained}>
                  SEE PRODUCT
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: ["1.5rem", "2rem"] }}>
          <Card
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              height: "320px",
              backgroundImage: (() => {
                if (xs || sm) {
                  return `url(https:${zx7Mobile.fields.file.url})`;
                } else if (md) {
                  return `url(https:${zx7Tablet.fields.file.url})`;
                } else {
                  return `url(https:${zx7Desktop.fields.file.url})`;
                }
              })(),
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "8px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: ["flex-start", "center"],
                flexDirection: "column",
                gap: "2rem",
                paddingLeft: ["2rem", "3rem", "5rem", "6rem"],
              }}
            >
              <Typography variant="h4">ZX7 SPEAKER</Typography>
              <Button variant="outlined" className={styles.outlined}>
                SEE PRODUCT
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid container columnGap={md ? 2 : 4}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              height: "320px",
              backgroundImage: (() => {
                if (xs || sm) {
                  return `url(https:${yx1Mobile.fields.file.url})`;
                } else if (md) {
                  return `url(https:${yx1Tablet.fields.file.url})`;
                } else {
                  return `url(https:${yx1Desktop.fields.file.url})`;
                }
              })(),
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              marginBottom: ["1.5rem", 0],
              borderRadius: "8px",
            }}
          ></Grid>
          <Grid
            item
            // sm={6}
            sx={{
              backgroundColor: "#f1f1f1",
              flexGrow: 1,
              height: "320px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                flexBasis: ["80%"],
              }}
            >
              <Typography variant="h4">YX1 EARPHONES</Typography>
              <Button variant="outlined" className={styles.outlined}>
                SEE PRODUCT
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

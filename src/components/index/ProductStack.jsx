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

export default function ProductStack({ assets }) {
  const findAssetById = (assets, id) => assets.find((obj) => obj.sys.id === id);

  const images = {
    zx9: "17F921vkUMSfJo2KFqu1ji",
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
      <Grid container sx={{ margin: ["7.5rem 0", "6rem 0", "12.5rem 0"] }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#d87d4a",
            backgroundImage: `url(https:${circles.fields.file.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: ["10% 100%", "10% 50%", "10% 100%"],
            backgroundSize: "cover",
            borderRadius: "8px",
            marginBottom: ["1.5rem", "2rem"],
          }}
        >
          <Card
            elevation={0}
            sx={{ border: "none", backgroundColor: "transparent" }}
          >
            <Grid
              container
              sx={{
                color: "#fff",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                position: "relative",
                gap: ["3rem", "3rem", "5rem"],
                padding: ["3.5rem 0", "3.5rem 0", "2rem 0"],
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  position: "relative",
                  height: ["200px", "200px", "450px"],
                }}
              >
                <Image
                  src={`https:${zx9.fields.file.url}`}
                  alt="zx9 headphones image"
                  fill
                  sizes="(max-width: 600px) 100vw,
                  (max-width: 900px) 100vw,
                  50vw"
                  style={{
                    objectFit: "contain",
                    top: lg ? "2.75rem" : 0,
                  }}
                />
              </Grid>
              <Grid item xs={8} sm={6} md={5}>
                <Stack
                  spacing={3}
                  sx={{
                    display: "flex",
                    alignItems: ["center", "center", "flex-start"],
                  }}
                >
                  <Typography variant="h1">ZX9 SPEAKER</Typography>
                  <Typography
                    sx={{
                      color: "#f5ded2",
                      textAlign: ["center", "center", "left"],
                    }}
                  >
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      width: "160px",
                      height: "48px",
                      borderRadius: 0,
                      boxShadow: "none",
                      backgroundColor: "#000",
                      "&:hover": {
                        backgroundColor: "#4c4c4c",
                        boxShadow: "none",
                      },
                    }}
                    href={"/speakers/zx9-speaker"}
                  >
                    SEE PRODUCT
                  </Button>
                </Stack>
              </Grid>
            </Grid>
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
              <Button
                variant="outlined"
                sx={{
                  width: "160px",
                  height: "48px",
                  borderRadius: 0,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  color: "#000",
                  borderColor: "#000",
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#fff",
                    boxShadow: "none",
                    borderColor: "#000",
                  },
                }}
                href={"/speakers/zx7-speaker"}

              >
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
              <Button
                variant="outlined"
                sx={{
                  width: "160px",
                  height: "48px",
                  borderRadius: 0,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  color: "#000",
                  borderColor: "#000",
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#fff",
                    boxShadow: "none",
                    borderColor: "#000",
                  },
                }}
                href={"/earphones/yx1-wireless-earphones"}

              >
                SEE PRODUCT
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

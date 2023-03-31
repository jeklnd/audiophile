import BestAudio from "@/components/layout/BestAudio.jsx";
import YouMayAlsoLike from "@/components/product-pages/YouMayAlsoLike";
import Gallery from "@/components/Gallery.jsx";
import { createClient } from "contentful";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  let slugs = {};
  const client = createClient({
    space: process.env.SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENT_DELIVERY_TOKEN,
  });

  await client
    .getEntries({ limit: 1000 })
    .then((response) => {
      slugs = response.items;
    })
    .catch(console.error);

  const paths = slugs.map((slug) => {
    return `/[category]/${slug.fields.slug}`;
  });

  //   console.log(paths);

  return {
    paths,
    fallback: "blocking", // value must be "blocking". false creates a 404 error, true creates a bug
  };
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENT_DELIVERY_TOKEN,
  });

  let assets = {};
  let slugs = {};

  await client
    .getAssets({ limit: 1000 })
    .then((response) => {
      assets = response.items;
    })
    .catch(console.error);

  await client
    .getEntries({ limit: 1000 })
    .then((response) => {
      slugs = response.items;
    })
    .catch(console.error);

  return { props: { assets, slugs } };
}

export default function Product({ assets, slugs }) {
  const router = useRouter();
  const slug = router.query.product;
  const product = slugs.find((product) => product.fields.slug === slug);
  const mainProductImage = `https:${product.fields.mainProductImage.fields.file.url}`;
  const galleryImage1 = `https:${product.fields.galleryImage1.fields.file.url}`;
  const galleryImage2 = `https:${product.fields.galleryImage2.fields.file.url}`;
  const galleryImage3 = `https:${product.fields.galleryImage3.fields.file.url}`;
  const name = product.fields.name;
  const description = product.fields.description.content[0].content[0].value;
  const features = product.fields.features.content[0].content[0].value.replace(
    /\n/g,
    "<br>"
  );
  //   console.log(features);
  const price = product.fields.price;
  const inTheBox = product.fields.boxItemsObject.items;

  //   console.log(inTheBox);
  console.log(product.fields.name)

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description}/>
      </Head>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: "#7d7d7d",
                margin: ["1rem 0 1.5rem", "2rem 0 1.5rem", "5rem 0 3.5rem"],
              }}
            >
              Go Back
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                position: "relative",
                height: ["327px", "480px", "386px"],
                borderRadius: "8px",
                backgroundColor: "#f1f1f1",
                margin: ["0 0 2rem 0", "0 4.5rem 0 0", "0 7.75rem 0 0"],
              }}
            >
              <Image
                src={mainProductImage}
                alt="product image"
                fill
                sizes="(max-width: 600px) 100vw,
              (max-width: 900px) 100vw,
              50vw"
                style={{ objectFit: "contain" }}
                priority
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Stack spacing={{ xs: 3, sm: 4 }}>
              {/* <Typography variant="overline"> new product</Typography> */}
              <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
                {name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#7d7d7d" }}>
                {description}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "900" }}>
                {price}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <ButtonGroup sx={{ display: "flex", flexDirection: "row" }}>
                  <Button
                    sx={{
                      height: "100%",
                      width: "40px",
                      borderRadius: 0,
                      backgroundColor: "#f1f1f1",
                      color: "#b5b5b5",
                      border: "none",
                      margin: "0 -1px 0",

                      "&:hover": {
                        color: "#d87d4a",
                        backgroundColor: "#f1f1f1",
                        border: "none",
                      },
                    }}
                  >
                    -
                  </Button>
                  <Box
                    sx={{
                      width: "40px",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#f1f1f1",
                    }}
                  >
                    <Typography sx={{ borderRadius: 0 }}>1</Typography>
                  </Box>
                  <Button
                    sx={{
                      height: "100%",
                      width: "40px",
                      borderRadius: 0,
                      backgroundColor: "#f1f1f1",
                      color: "#b5b5b5",
                      border: "none",
                      margin: "0",

                      "&:hover": {
                        color: "#d87d4a",
                        backgroundColor: "#f1f1f1",
                        border: "none",
                      },
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>

                <Button
                  sx={{
                    textTransform: "uppercase",
                    width: "160px",
                    height: "48px",
                    borderRadius: 0,
                    boxShadow: "none",
                    backgroundColor: "#d87d4a",
                    color: "#fff",
                    border: "none",
                    "&:hover": {
                      backgroundColor: "#fbaf85",
                      boxShadow: "none",
                      border: "none",
                    },
                  }}
                >
                  add to cart
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            sx={{
              paddingTop: ["88px", "120px", "160px"],
              paddingRight: { md: "125px" },
            }}
          >
            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
              features
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#7d7d7d", paddingTop: ["1.5rem", "2rem"] }}
              dangerouslySetInnerHTML={{ __html: features }}
            ></Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Grid container sx={{ paddingTop: ["88px", "120px", "160px"] }}>
              <Grid item xs={12} sm={6} md={12}>
                <Typography
                  variant="h2"
                  sx={{
                    textTransform: "uppercase",
                    verticalAlign: { sm: "top" },
                  }}
                >
                  in the box
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                {inTheBox.map((item, index) => {
                  return (
                    <Grid
                      container
                      key={index}
                      sx={{
                        paddingTop:
                          index === 0 ? ["1.5rem", 0, "2rem"] : "0.5rem",
                      }}
                    >
                      <Grid item>
                        <Typography
                          sx={{
                            color: "#d87d4a",
                            fontWeight: "600",
                            marginRight: ["21px", "1.5rem"],
                          }}
                        >
                          {item.quantity}x
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ color: "#7d7d7d" }}>
                          {item.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={["20px", "18px", "30px"]}
            sx={{
              marginTop: ["88px", "120px", "160px"],
              marginBottom: ["120px", "120px", "160px"],
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ["20px", "20px", "32px"],
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: ["174px", "100%", "280px"],
                  borderRadius: "8px",
                  backgroundColor: "#f1f1f1",
                }}
              >
                <Image
                  src={galleryImage1}
                  alt="product image"
                  fill
                  sizes="(max-width: 600px) 100vw, 29vw"
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                ></Image>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: ["174px", "100%", "280px"],
                  borderRadius: "8px",
                  backgroundColor: "#f1f1f1",
                }}
              >
                <Image
                  src={galleryImage2}
                  alt="product image"
                  fill
                  sizes="(max-width: 600px) 100vw, 29vw"
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                ></Image>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  position: "relative",
                  height: ["368px", "480px", "592px"],
                  borderRadius: "8px",
                  backgroundColor: "#f1f1f1",
                }}
              >
                <Image
                  src={galleryImage3}
                  alt="product image"
                  fill
                  sizes="(max-width: 600px) 100vw, 71vw"
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                ></Image>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <YouMayAlsoLike assets={slugs} />
        <Gallery assets={assets} />
        <BestAudio assets={assets} />
      </Container>
    </>
  );
}

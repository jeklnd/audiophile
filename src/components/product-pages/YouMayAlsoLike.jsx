import {
  Card,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function YouMayAlsoLike({ assets }) {
  const router = useRouter();
  const slug = router.query.product;
  const seed = 123
  const getThreeRandomProducts = (assets, slug) => {
    const assetCopy = [...assets];
    for (const product of assetCopy) {
      if (product.fields.slug === slug) {
        assetCopy.splice(assetCopy.indexOf(product), 1);
      }
    }
    const shuffledArray = assetCopy.sort((a, b) => {
      const pseudoRandomA =
        (Math.sin(seed + a.fields.name.charCodeAt(0)) * 10000) % 1;
      const pseudoRandomB =
        (Math.sin(seed + b.fields.name.charCodeAt(0)) * 10000) % 1;
      return pseudoRandomA - pseudoRandomB;
    });
    const threeRandomProducts = shuffledArray.filter((item, index) => {
      return index < 3;
    });

    return threeRandomProducts;
  };

  const threeRandomProducts = getThreeRandomProducts(assets, slug);

  return (
    <Container sx={{ marginBottom: "160px" }}>
      <Typography
        variant="h3"
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          paddingBottom: ["40px", "56px", "64px"],
        }}
      >
        you may also like
      </Typography>
      <Grid container spacing={{ sm: 2, md: 4 }} rowGap={7}>
        {threeRandomProducts.map((product, index) => {
          return (
            <Grid item xs={12} sm={4} key={index} sx={{}}>
              <Stack
                spacing={4}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: ["120px", "318px"],
                    backgroundColor: "#f1f1f1",
                    borderRadius: "8px",
                    width: "100%",
                  }}
                >
                  <Image
                    src={`https:${product.fields.mainProductImage.fields.file.url}`}
                    alt="product image"
                    fill
                    sizes="
                    (max-width: 900px) 100vw,
                    33vw"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  {product.fields.name}
                </Typography>
                <Button
                  sx={{
                    textTransform: "uppercase",
                    width: "160px",
                    height: "48px",
                    borderRadius: 0,
                    boxShadow: "none",
                    backgroundColor: "#d87d4a",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fbaf85",
                      boxShadow: "none",
                    },
                    verticalAlign: "bottom",
                  }}
                  href={product.fields.slug}
                >
                  see product
                </Button>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

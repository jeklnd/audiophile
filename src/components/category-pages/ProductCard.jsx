import {
  Card,
  Typography,
  Button,
  CardContent,
  Grid,
  Container,
  Box,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductCard({ products, category }) {
  const router = useRouter();
  const slug = router.query.slug;
  // console.log("the category is...")
  // console.log(category)

  return (
    <Container>
      <Grid container gap={15} sx={{ margin: "60px 0 120px" }}>
        {products.map((product, index) => {
          return (
            <Grid item key={index}>
              <Card elevation={0}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    container
                    gap={{ xs: "2rem", sm: "3.25rem", md: 0 }}
                    spacing={{ md: 16 }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      sx={{
                        order: { md: index % 2 === 0 ? 0 : 1 },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: ["352px ", "352px", "560px"],
                          backgroundColor: "#f1f1f1",
                          borderRadius: "8px",
                        }}
                      >
                        <Image
                          src={`https:${product.fields.mainProductImage.fields.file.url}`}
                          alt={`${product.fields.name} image`}
                          fill
                          sizes="(max-width: 600px) 100vw,
                          (max-width: 900px) 100vw,
                          50vw"
                          priority={`${index === 0}`}
                          style={{ objectFit: "contain" }}
                        ></Image>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: ["center", "center", "flex-start"],
                        textAlign: ["center", "center", "left"],
                      }}
                    >
                      {index === 0 && (
                        <Typography
                          variant="overline"
                          sx={{ textTransform: "uppercase" }}
                        >
                          new product
                        </Typography>
                      )}
                      <Typography
                        variant="h2"
                        sx={{
                          marginTop: index === 0 ? ["1.5rem", "1rem"] : 0,
                          textTransform: "uppercase",
                        }}
                      >
                        {product.fields.name}{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          marginTop: ["1.5rem", "2rem", "2rem"],
                          color: "#7d7d7d",
                        }}
                      >
                        {product.fields.description.content[0].content[0].value}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "uppercase",
                          marginTop: ["1.5rem", "1.5rem", "2.5rem"],
                          width: "160px",
                          height: "48px",
                          borderRadius: 0,
                          boxShadow: "none",
                          backgroundColor: "#d87d4a",
                          "&:hover": {
                            backgroundColor: "#fbaf85",
                            boxShadow: "none",
                          },
                        }}
                        href={`${category}/${product.fields.slug}`}
                      >
                        see product
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

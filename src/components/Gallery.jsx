import React from "react";
import {
  Grid,
  Card,
  Box,
  Container,
  CardHeader,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Gallery({ assets }) {
  const findAssetById = (assets, id) => assets.find((obj) => obj.sys.id === id);

  const images = {
    xx99: "7eL5UvPato2ihWnBsvPBr8",
    zx9: "66nL343lmgahxpNxpJDqiI",
    yx1: "LaulTajbAU08vmBPkgCqS",
  };

  const [xx99, zx9, yx1] = Object.values(images).map((id) =>
    findAssetById(assets, id)
  );

  const categories = [
    { img: xx99.fields.file.url, title: "headphones" },
    { img: zx9.fields.file.url, title: "speakers" },
    { img: yx1.fields.file.url, title: "earphones" },
  ];

  return (
    <Container sx={{marginTop: "1rem"}}>
      <Grid container spacing={2}>
        {categories.map((category, index) => {
          return (
            <Grid key={index} item xs={12} sm={4}>
              <Card elevation={0}>
                <CardHeader sx={{ height: "80px" }}></CardHeader>
                <CardActionArea
                  sx={{
                    borderRadius: "8px",
                    "&:hover": {
                      "& .shop": {
                        color: "#d87d4a",
                      },
                    },
                  }}
                  href={`/${category.title}`}
                >
                  <CardContent
                    sx={{
                      backgroundColor: "#f1f1f1",
                      height: ["165px", "165px", "204px"],
                      borderRadius: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: ["120px", "120px", "150px"],
                        top: "-80px",
                      }}
                    >
                      <Image
                        src={`https:${category.img}`}
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw,
                        33vw"
                        style={{ objectFit: "contain" }}
                      ></Image>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        top: ["-3.5rem", "-3.75rem", "-3.5rem"],
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textTransform: "uppercase",
                          textAlign: "center",
                        }}
                      >
                        {category.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          textTransform: "uppercase",
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.75rem",
                        }}
                        className="shop"
                      >
                        SHOP
                        <ArrowForwardIosIcon
                          className="arrow"
                          fontSize="40px"
                          sx={{ color: "#d87d4a" }}
                        />
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

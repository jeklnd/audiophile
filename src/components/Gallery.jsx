import React from "react";
import {
  Grid,
  Card,
  Box,
  Container,
  CardHeader,
  CardContent,
} from "@mui/material";
import Image from "next/image";

export default function Gallery({ assets }) {
  const findAssetById = (assets, id) => assets.find((obj) => obj.sys.id === id);

  const images = {
    xx99: "7eL5UvPato2ihWnBsvPBr8",
  };

  const [xx99] = Object.values(images).map((id) => findAssetById(assets, id));

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card elevation={0} sx={{ position: "relative" }}>
            <Box sx={{ position: "relative", width: "100%" }}>
              <CardHeader sx={{ height: "80px" }}></CardHeader>
              <CardContent
                sx={{
                  backgroundColor: "#f1f1f1",
                  height: ["165px", "165px", "204px"],
                  borderRadius: "8px",
                }}
              ></CardContent>
            </Box>
            {/* <Box sx={{ position: "absolute", height: "160px" }}> */}
              <Box sx={{ position: "relative", height: "160px" }}>
                <Image
                  src={`https:${xx99.fields.file.url}`}
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                ></Image>
              {/* </Box> */}
            </Box>
          </Card>
        </Grid>









        <Grid item xs={12} sm={4}>
          <Card elevation={0} sx={{ position: "relative" }}>
            <Box sx={{ position: "relative", width: "100%" }}>
              <CardHeader sx={{ height: "80px" }}></CardHeader>
              <CardContent
                sx={{
                  backgroundColor: "#f1f1f1",
                  height: ["165px", "165px", "204px"],
                  borderRadius: "8px",
                }}
              ></CardContent>
            </Box>
            <Box sx={{ position: "absolute" }}>
              <Box sx={{ position: "relative", height: "160px" }}>
                <Image
                  src={`https:${xx99.fields.file.url}`}
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                ></Image>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={0} sx={{ position: "relative" }}>
            <Box sx={{ position: "relative", width: "100%" }}>
              <CardHeader sx={{ height: "80px" }}></CardHeader>
              <CardContent
                sx={{
                  backgroundColor: "#f1f1f1",
                  height: ["165px", "165px", "204px"],
                  borderRadius: "8px",
                }}
              ></CardContent>
            </Box>
            <Box sx={{ position: "absolute" }}>
              <Box sx={{ position: "relative", height: "160px" }}>
                <Image
                  src={`https:${xx99.fields.file.url}`}
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                ></Image>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

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

import zx9 from "public/assets/home/desktop/home-desktop-speaker-zx9.png";
import yx1 from "public/assets/home/desktop/home-desktop-earphones-yx1.jpg";
import testJawn from "public/assets/product-zx9-speaker/desktop/product-zx9-speaker-desktop-product-removebg-preview.png";
import testJawn2 from "public/assets/product-zx9-speaker/desktop/product-zx9-speaker-desktop-product.png";

export default function ProductStack({ assets }) {
    const zx9Desktop = assets.find(
        (obj) => obj.sys.id === "1dsQVjFiE15nI4WAkfb3pg"
    );
    const zx9Tablet = assets.find(
        (obj) => obj.sys.id === "6AnyXliuzOtveo5znonrvo"
    );
    const zx9Mobile = assets.find(
        (obj) => obj.sys.id === "2Lxm6p19YEOG1rlrAAR80I"
    );
    const circles = assets.find(
        (obj) => obj.sys.id === "2KUP6gcPMQTOA3mTQjgV3C"
    );
    console.log(circles);

    console.log(testJawn);

    const desktop = useMediaQuery("(min-width: 900px)");
    const tablet = useMediaQuery("(min-width: 600px)");

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
                            <Box
                                style={{
                                    position: "relative",
                                    width: "90%",
                                    height: "90%",
                                }}
                            >
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
                                    src={`https:${zx9Desktop.fields.file.url}`}
                                    alt="zx9 headphones image"
                                    fill
                                    style={{
                                        objectFit: tablet ? "contain" : "cover",
                                    }}
                                />
                            </Box>
                            <Stack
                                spacing={3}
                                sx={{ paddingBottom: ["1.5rem", "2.5rem"] }}
                            >
                                <Typography variant="h1">
                                    ZX9 SPEAKER
                                </Typography>
                                <Typography>
                                    Upgrade to premium speakers that are
                                    phenomenally built to deliver truly
                                    remarkable sound.
                                </Typography>
                                <Button variant="contained">SEE PRODUCT</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">ZX7 SPEAKER</Typography>
                    <Button variant="contained">SEE PRODUCT</Button>
                </Grid>
                <Grid item md={6}>
                    <Box
                        component="picture"
                        sx={{
                            display: "block",
                            position: "relative",
                            height: "100px",
                        }}
                    >
                        <Image
                            src={yx1}
                            alt="yx1 earphones"
                            fill
                            style={{ borderRadius: "8px" }}
                        ></Image>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h4">YX1 EARPHONES</Typography>
                    <Button variant="contained">SEE PRODUCT</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

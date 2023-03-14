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
import Image from "next/image";

import circles from "public/assets/home/desktop/home-desktop-pattern-circles.svg";
import zx9 from "public/assets/home/desktop/home-desktop-speaker-zx9.png";
import yx1 from "public/assets/home/desktop/home-desktop-earphones-yx1.jpg";

export default function ProductStack() {
    return (
        <Container>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sx={{
                        backgroundColor: "#d87d4a",
                        backgroundImage: { circles },
                        borderRadius: "8px",
                    }}
                >
                    <Card
                        elevation={0}
                        sx={{ background: "transparent", border: "none" }}
                    >
                        <CardMedia
                            image={
                                "public/assets/home/desktop/home-desktop-speaker-zx9.png"
                            }
                            title="zx9 speaker"
                        ></CardMedia>
                        <CardContent
                            sx={{
                                color: "#fff",
                                textAlign: "center",
                            }}
                        >
                            {/* <img></img> */}
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
                            </Stack>
                            <Button variant="contained">SEE PRODUCT</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">ZX7 SPEAKER</Typography>
                    <Button variant="contained">SEE PRODUCT</Button>
                </Grid>
                <Grid item md={6}>
                    <Box component="picture" sx={{ display: "block", position: "relative", height: "100px" }}>
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

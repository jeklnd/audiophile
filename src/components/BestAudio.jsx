import { Container, Typography, Grid, Box } from "@mui/material";
import styles from "./BestAudio.module.css";

export default function BestAudioGear({ src }) {
    return (
        <Container>
            <Grid
                container
                rowGap={{ xs: "2.5rem", sm: "4rem", md: 0 }}
                sx={{
                    margin: ["7.5rem 0", "6rem 0", "12.5rem 0"],
                    justifyContent: { md: "space-between" },
                    textAlign: ["center", "center", "left"],
                }}
            >
                <Grid item xs={12} sm={12} md={6} order={{ md: 2 }}>
                    <picture style={{ position: "relative" }}>
                        <source
                            srcSet={`https:${src.mobile.fields.file.url}`}
                            media="(max-width: 600px)"
                        />
                        <source
                            srcSet={`https:${src.tablet.fields.file.url}`}
                            media="(max-width: 900px)"
                        ></source>
                        <source
                            srcSet={`https:${src.desktop.fields.file.url}`}
                            media="(max-width: 1200px)"
                        ></source>
                        <img
                            src={`https:${src.mobile.fields.file.url}`}
                            alt="man wearing headphones"
                            className={styles.image}
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
                        Bringing you the{" "}
                        <span style={{ color: "#d87d4a" }}>best</span> audio
                        gear.
                    </Typography>
                    <Typography sx={{ color: "#7d7d7d" }}>
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

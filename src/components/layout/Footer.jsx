import React from "react";
import {
    Grid,
    Typography,
    List,
    Link as MuiLink,
    Container,
    Box,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const year = new Date().getFullYear();
const links = ["home", "headphones", "speakers", "earphones"];
const socialIcons = [
    { icon: <FacebookIcon key="1" />, url: "https://www.facebook.com/" },
    { icon: <TwitterIcon key="2" />, url: "https://www.twitter.com/" },
    { icon: <InstagramIcon key="3" />, url: "https://www.instagram.com/" },
];

export default function Footer({ logo }) {
    return (
        <Box
            sx={{
                backgroundColor: "#101010",
                color: "#fff",
                padding: ["0 0.5rem", "0 1rem", "0 1.5rem"],
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: ["center", "flex-start"],
                    }}
                >
                    <Box
                        sx={{
                            width: "101px",
                            borderTop: "solid 4px #D87D4A",
                            justifySelf: "center",
                        }}
                    ></Box>
                </Box>
                <Grid
                    container
                    sx={{
                        textAlign: ["center", "start"],
                        alignItems: "center",
                        margin: ["3rem 0 2rem", "3.5rem 0 3rem"],
                        rowGap: ["3rem", "2rem"],
                    }}
                >
                    <Grid item xs={12} sm={12} md={4} lg={6}>
                        <MuiLink
                            component={Link}
                            href="/"
                            underline="none"
                            sx={{
                                color: "#fff",
                                "&:hover": { color: "#D87D4A" },
                                marginRight: ["0", "auto", "0"],
                                display: "flex",
                                alignItems: "center",
                                justifyContent: ["center", "flex-start"],
                            }}
                        >
                            <Image src={logo} alt="audiophile logo"></Image>
                        </MuiLink>
                    </Grid>

                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <List
                            sx={{
                                padding: 0,
                                display: { md: "flex" },
                                justifyContent: { md: "flex-end" },
                            }}
                        >
                            {links.map((link, index) => (
                                <MuiLink
                                    key={index}
                                    component={Link}
                                    href={link !== "home" ? link : "/"}
                                    underline="none"
                                    variant="body2"
                                    sx={{
                                        color: "#fff",
                                        padding: [
                                            "0.5rem 0",
                                            "0 2rem 0 0",
                                            "0 0 0 2rem",
                                        ],
                                        "&:hover": { color: "#D87D4A" },
                                        display: ["block", "inline"],
                                    }}
                                >
                                    {link.toUpperCase()}
                                </MuiLink>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <Typography variant="body1" sx={{ color: "#878787" }}>
                            Audiophile is an all in one stop to fulfill your
                            audio needs. We&apos;re a small team of music lovers
                            and sound specialists who are devoted to helping you
                            get the most out of personal audio. Come and visit
                            our demo facility - we&apos;re open 7 days a week.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={12}
                        sx={{ order: { md: "5" } }}
                        paddingTop={{ xs: 0, sm: "3rem", md: "1.5rem" }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ color: "#878787", fontWeight: "700" }}
                        >
                            Copyright {year}. All Rights Reserved
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={6}
                        paddingTop={{ xs: 0, sm: "3rem" }}
                        sx={{
                            display: "flex",
                            justifyContent: ["center", "end"],
                        }}
                    >
                        <List>
                            {socialIcons.map((social, index) => {
                                return (
                                    <MuiLink
                                        key={index}
                                        sx={{
                                            color: "#fff",
                                            margin: "0 0.5rem",
                                            "&:hover": { color: "#D87D4A" },
                                        }}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                    </MuiLink>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

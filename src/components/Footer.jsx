import React from "react";
import {
    Grid,
    Typography,
    List,
    Divider,
    Link as MuiLink,
    Container,
} from "@mui/material";
import { Link } from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const year = new Date().getFullYear();
const links = ["home", "headphones", "speakers", "earphones"];
const socialIcons = [<FacebookIcon key="1"/>, <TwitterIcon key="2"/>, <InstagramIcon key="3"/>];

export default function Footer() {
    return (
        <Grid container sx={{ backgroundColor: "#101010", color: "#fff", position: "fixed", bottom: "0" }}>
            <Container>
                <Grid item>
                    <Typography>audiophile</Typography>
                    <Typography>
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we're open 7 days a week.
                    </Typography>
                    <Typography>
                        Copyright {year}. All Rights Reserved
                    </Typography>
                    <List>
                        {links.map((link, index) => (
                            <MuiLink
                                component={Link}
                                key={index}
                                href={link}
                                sx={{
                                    color: "#fff",
                                    padding: "0px 1rem",
                                    "&:hover": { color: "#D87D4A" },
                                }}
                                underline="none"
                                variant="body1"
                            >
                                {link.toUpperCase()}
                            </MuiLink>
                        ))}
                    </List>
                    <List>
                        {socialIcons.map((icon, index) => {
                            return (
                                <MuiLink
                                    key={index}
                                    sx={{ color: "#fff", marginRight: "1rem" }}
                                >
                                    {icon}
                                </MuiLink>
                            );
                        })}
                    </List>
                </Grid>
            </Container>
        </Grid>
    );
}

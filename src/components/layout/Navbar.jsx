import React from "react";
import {
    AppBar,
    Container,
    Toolbar,
    Link as MuiLink,
    List,
    IconButton,
    Drawer,
    Backdrop,
    Dialog,
    Divider,
    Box,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ logo }) {
    const links = ["home", "headphones", "speakers", "earphones"];

    return (
        <>
            <AppBar
                sx={{
                    position: "sticky",
                    backgroundColor: ["#0f0f0f", "#0f0f0f", "#141414"],
                    padding: ["2rem 0 1.5rem", "2rem 0 0"],
                }}
                elevation={0}
            >
                <Container>
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                paddingRight: ["0", "2rem", "0"],
                                display: { md: "none" },
                            }}
                        >
                            <IconButton
                                sx={{
                                    color: "#fff",
                                }}
                                aria-label="open navigation menu"
                                size="medium"
                            >
                                <MenuIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                        <MuiLink
                            component={Link}
                            href="/"
                            underline="none"
                            sx={{
                                color: "#fff",
                                "&:hover": { color: "#D87D4A" },
                                marginRight: ["0", "auto", "0"],
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image src={logo} alt="audiophile logo"></Image>
                        </MuiLink>

                        <List sx={{ display: ["none", "none", "inline"] }}>
                            {links.map((link, index) => (
                                <MuiLink
                                    component={Link}
                                    key={index}
                                    href={link !== "home" ? link : "/"}
                                    variant="body2"
                                    sx={{
                                        color: "#fff",
                                        padding: "0px 1rem",
                                        "&:hover": { color: "#D87D4A" },
                                    }}
                                    underline="none"
                                >
                                    {link.toUpperCase()}
                                </MuiLink>
                            ))}
                        </List>

                        <IconButton
                            sx={{
                                color: "white",
                                "&:hover": { color: "#D87D4A" },
                            }}
                            aria-label="open shopping cart"
                            size="medium"
                        >
                            {/* <MuiLink component={Link} href={"/checkout"} sx={{all: "inherit"}}> */}
                                <ShoppingCartOutlinedIcon fontSize="inherit" />
                            {/* </MuiLink> */}
                        </IconButton>
                    </Toolbar>
                    <Box
                        sx={{
                            margin: ["0", "0 1.5rem"],
                            padding: ["0", "1.5rem 0 0"],

                            borderBottom: "solid 1px #2b2b2b",
                            display: ["none", "block"],
                        }}
                    ></Box>
                </Container>
            </AppBar>
            <Box
                sx={{
                    borderTop: "solid 1px #2b2b2b",
                    display: ["block", "none"],
                }}
            ></Box>
        </>
    );
}

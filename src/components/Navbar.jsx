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
    useMediaQuery,
} from "@mui/material";
import { Link } from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar({ theme }) {
    const links = ["home", "headphones", "speakers", "earphones"];
    // const isScreenMedium = useMediaQuery((theme) =>
    //     theme.breakpoints.down("md")
    // );

    return (
        <>
            <AppBar
                sx={{ position: "sticky", backgroundColor: "#0E0E0E" }}
                elevation="0"
            >
                <Container>
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <MuiLink
                            component={Link}
                            href="/"
                            underline="none"
                            sx={{
                                color: "#fff",
                                "&:hover": { color: "#D87D4A" },
                            }}
                            variant="h3"
                        >
                            audiophile
                        </MuiLink>
                        <List>
                            {links.map((link, index) => (
                                <MuiLink
                                    component={Link}
                                    key={index}
                                    href={link !== "home" ? link : "/"}
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

                        <IconButton
                            sx={{
                                color: "white",
                                "&:hover": { color: "#D87D4A" },
                            }}
                            aria-label="open shopping cart"
                            size="medium"
                        >
                            <ShoppingCartOutlinedIcon fontSize="inherit" />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Divider color="#fff"></Divider>
            </Container>
        </>
    );
}

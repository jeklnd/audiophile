import React, { useState, Fragment } from "react";
import {
    Box,
    Drawer,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    CardActionArea,
    CardAction,
    Grid,
    Container,
} from "@mui/material";
import Image from "next/image";

import earphones from "public/assets/shared/desktop/shared-desktop-category-thumbnail-earphones.png";
import headphones from "public/assets/shared/desktop/shared-desktop-category-thumbnail-headphones.png";
import speakers from "public/assets/shared/desktop/shared-desktop-category-thumbnail-speakers.png";
import { WidthFullOutlined, WidthFullSharp } from "@mui/icons-material";
const width = 150;
console.log(headphones);

export default function Menu() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Container>
                <Grid
                    container
                    spacing={2}
                    sx={{ padding: ["2rem 0", "3.75rem 0"] }}
                >
                    {[
                        ["HEADPHONES", headphones],
                        ["SPEAKERS", speakers],
                        ["EARPHONES", earphones],
                    ].map((category, i) => {
                        return (
                            <Grid item key={i} xs={12} sm={4}>
                                <Card>
                                    <CardActionArea
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            backgroundColor: "#f1f1f1",
                                        }}
                                    >
                                        <CardContent>
                                            <Image
                                                src={category[1].src}
                                                alt={category[0]}
                                                width={width}
                                                height={width * 0.964}
                                            ></Image>

                                            <Typography>
                                                {category[0]}
                                            </Typography>
                                            <Button type="text">SHOP</Button>
                                        </CardContent>
                                    </CardActionArea>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            height: "100",
                                            backgroundColor: "white",
                                        }}
                                    ></Box>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );

    return (
        <div>
            {["left", "right", "top", "bottom"].map((anchor) => (
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        {anchor}
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
        </div>
    );
}

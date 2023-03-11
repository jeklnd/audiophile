import { Card, CardMedia, CardContent, Box, Typography } from "@mui/material";
import Image from "next/image";

export function SummaryItem({ fileUrl, width, height }) {
    return (
        <Card
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            <CardMedia
                sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <Image
                    src={fileUrl}
                    alt="product image"
                    width="64"
                    height="64"
                    style={{ borderRadius: "0.5rem" }}
                ></Image>
            </CardMedia>
            <CardContent
                sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                        XX99 MK 11
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", color: "#808080" }}>
                        $ 2,999
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontWeight: "bold",
                        color: "#808080",
                    }}
                >
                    x1
                </Typography>
            </CardContent>
        </Card>
    );
}

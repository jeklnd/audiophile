import { Box, Typography } from "@mui/material";
export function SummaryText({ label, value, isGrandTotal = false }) {
    return (
        <Box sx={{ display: "flex", paddingTop: isGrandTotal && "1.5rem" }}>
            <Typography sx={{ flexGrow: 1, color: "#808080" }}>
                {label.toUpperCase()}
            </Typography>
            <Typography
                sx={{
                    color: isGrandTotal ? "#d87d4a" : "000",
                    fontWeight: "bold",
                }}
            >
                {value}
            </Typography>
        </Box>
    );
}

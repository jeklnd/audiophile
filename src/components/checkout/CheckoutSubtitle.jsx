import { Typography } from "@mui/material";

export function CheckoutSubtitle({ subtitle }) {
    return (
        <Typography
            variant="subtitle1"
            sx={{ margin: ["2rem auto -0.5rem", "3.5rem auto -0.5rem"] }}
        >
            {subtitle.toUpperCase()}
        </Typography>
    );
}

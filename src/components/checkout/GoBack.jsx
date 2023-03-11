import React from "react";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";

export default function GoBack() {
    return (
        <MuiLink
            component={Link}
            href={"/"}
            sx={{
                margin: ["1rem 0 1.5rem", "3rem 0 1.5rem", "5rem 0 2rem"],
                color: "#7d7d7d",
                textDecoration: "none",
                "&:hover": { color: "#d87d4a" },
            }}
        >
            Go Back
        </MuiLink>
    );
}

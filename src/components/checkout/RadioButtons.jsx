import {
    Stack,
    Button,
    FormControlLabel,
    Radio,
    Typography,
} from "@mui/material";
import { useState } from "react";

export function RadioButtons({checkedIndex, onCheck}) {
    const buttonLabels = ["e-Money", "Cash on Delivery"];
    return (
        <Stack spacing={2}>
            {buttonLabels.map((label, index) => {
                return (
                    <RadioButton
                        key={index}
                        label={label}
                        checked={checkedIndex === index}
                        onCheck={() => onCheck(index)}
                    ></RadioButton>
                );
            })}
        </Stack>
    );
}

function RadioButton({ label, onCheck, checked }) {
    const buttonStyles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        textTransform: "none",
        borderColor: "#cfcfcf",
        color: "#000",
        "&:hover": {
            borderColor: "#d87d4a",
            backgroundColor: "transparent",
        },
    };

    const radioStyles = {
        color: "#cfcfcf",
        "&.Mui-checked .MuiSvgIcon-root": {
            color: "#d87d4a",
        },
        "&.MuiButtonBase-root": {
            paddingLeft: 0,
            paddingRight: "1rem",
        },
        "&:hover": {
            backgroundColor: "transparent",
        },
    };
    return (
        <Button
            id="method"
            variant="outlined"
            sx={buttonStyles}
            fullWidth
            onClick={onCheck}
        >
            <Radio checked={checked} disableRipple sx={radioStyles} />
            <Typography sx={{ fontWeight: "bold" }}>{label}</Typography>
        </Button>
    );
}

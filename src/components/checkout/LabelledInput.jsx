import { InputLabel, TextField } from "@mui/material";

export function LabelledInput({ label, placeholder }) {
    return (
        <>
            <InputLabel
                htmlFor={label}
                sx={{
                    color: "#000",
                    fontWeight: "bold",
                    paddingBottom: "0.5rem",
                }}
            >
                {label}
            </InputLabel>
            <TextField
                id={label}
                placeholder={placeholder}
                fullWidth
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cfcfcf",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d87d4a",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d87d4a",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            borderColor: "#d87d4a",
                        },
                }}
            />
        </>
    );
}

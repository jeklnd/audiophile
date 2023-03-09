import { Box } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Manrope } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"] });
export let theme = createTheme({
    typography: {
        fontFamily: manrope.style.fontFamily,
        body1: {
            fontSize: "0.9375rem",
            fontWeight: 500,
            lineHeight: "1.667",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: "1.667",
            letterSpacing: "0.2em",
        },
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.03,
            letterSpacing: "0.0357em",
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "0.0375em",
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.125,
            letterSpacing: "0.0359em",
        },
        h4: {
            fontSize: "1.75rem",
            fontWeight: 700,
            lineHeight: "1.357",
            letterSpacing: "0.0714em",
        },

        h5: {
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: "1.375",
            letterSpacing: "0.0708em",
        },
        h6: {
            fontSize: "1.125rem",
            fontWeight: 700,
            lineHeight: "1.333",
            letterSpacing: "0.0722em",
        },
        overline: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.357",
            letterSpacing: "0.714em",
            color: "#D87D4A",
        },

        subtitle1: {
            fontSize: "0.8125rem",
            fontWeight: 700,
            lineHeight: "1.923",
            letterSpacing: "0.077em",
            color: "#D87D4A",
        },
    },
});
theme = responsiveFontSizes(theme);
console.log(theme);

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                    }}
                >
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                        {children}
                    </Box>
                    <Footer />
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}

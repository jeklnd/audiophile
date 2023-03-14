import { Box } from "@mui/material";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import logo from "/public/shared-desktop-logo.svg";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/styles/theme"

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
                    <Navbar logo={logo} />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                        {children}
                    </Box>
                    <Footer logo={logo} />
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}

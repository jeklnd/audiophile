/**
 * Please notice the Layout component does not render the BestAudio component intentially.
 * The BestAudio components fetches images from a headless CMS using the function getStaticProps(), which can only be called from within a page as of March 2023.
 * For performance reasons (pre-rendering, SEO), BestAudio must be rendered and getStaticProps() called on a page-by-page basis.
 *
 */

import { Box } from "@mui/material";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import logo from "/public/shared-desktop-logo.svg";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/styles/theme";

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

import { Box, Backdrop } from "@mui/material";
import Gallery from "@/components/Gallery";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/styles/theme";

export default function NavDrawer({ assets, onClick, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#ffffff",
              padding: ["1rem 0 2rem", "3rem 0 4rem"],
              position: "fixed",
              zIndex: theme.zIndex.drawer,
            }}
            role="presentation"
            onClick={onClick}
            component={motion.div}
            initial={{ y: -831 }}
            animate={{ y: 0 }}
            exit={{ y: -831 }}
            transition={{ duration: 0.4 }}
            key="modal"
          >
            <Gallery assets={assets}></Gallery>
          </Box>
          <Backdrop
            sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer - 1 }}
            open={isOpen}
            onClick={onClick}
          />
        </>
      )}
    </AnimatePresence>
  );
}

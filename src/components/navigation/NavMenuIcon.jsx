import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavMenuIcon({ onToggle }) {
  return (
    <Box
      sx={{
        paddingRight: ["0", "2rem", "0"],
        display: { md: "none" },
      }}
    >
      <IconButton
        sx={{
          color: "#fff",
        }}
        aria-label="open navigation menu"
        size="medium"
        onClick={onToggle}
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}

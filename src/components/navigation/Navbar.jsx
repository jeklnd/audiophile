import {
  AppBar,
  Container,
  Toolbar,
  Link as MuiLink,
  List,
  IconButton,
  Box,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NavMenuIcon from "@/components/navigation/NavMenuIcon";
import NavDrawer from "./NavDrawer";
import { useState } from "react";

export default function Navbar({ logo, assets }) {
  const links = ["home", "headphones", "speakers", "earphones"];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar
        sx={{
          position: "sticky",
          backgroundColor: ["#0f0f0f", "#0f0f0f", "#141414"],
          padding: ["2rem 0 1.5rem", "2rem 0 0"],
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        elevation={0}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <NavMenuIcon onToggle={handleClick} isOpen={isOpen} />
            <MuiLink
              component={Link}
              href="/"
              underline="none"
              sx={{
                color: "#fff",
                "&:hover": { color: "#D87D4A" },
                marginRight: ["0", "auto", "0"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={logo} alt="audiophile logo"></Image>
            </MuiLink>

            <List sx={{ display: ["none", "none", "inline"] }}>
              {links.map((link, index) => (
                <MuiLink
                  component={Link}
                  key={index}
                  href={link === "home" ? "/" : `/${link}`}
                  variant="body2"
                  sx={{
                    color: "#fff",
                    padding: "0px 1rem",
                    "&:hover": { color: "#D87D4A" },
                  }}
                  underline="none"
                >
                  {link.toUpperCase()}
                </MuiLink>
              ))}
            </List>

            <IconButton
              sx={{
                color: "white",
                "&:hover": { color: "#D87D4A" },
              }}
              aria-label="open shopping cart"
              size="medium"
            >
              <MuiLink
                component={Link}
                href={"/checkout"}
                sx={{ all: "inherit" }}
              >
                <ShoppingCartOutlinedIcon fontSize="inherit" />
              </MuiLink>
            </IconButton>
          </Toolbar>
          <Box
            sx={{
              margin: ["0", "0 1.5rem"],
              padding: ["0", "1.5rem 0 0"],

              borderBottom: "solid 1px #2b2b2b",
              display: ["none", "block"],
            }}
          ></Box>
        </Container>
      </AppBar>
      <Box
        sx={{
          borderTop: "solid 1px #2b2b2b",
          display: ["block", "none"],
        }}
      ></Box>
      <NavDrawer
        assets={assets}
        onClick={handleClick}
        isOpen={isOpen}
      ></NavDrawer>
    </>
  );
}

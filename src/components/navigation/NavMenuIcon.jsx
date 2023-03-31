import { useState, Fragment } from "react";
import { IconButton, Box, Drawer, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Gallery from "@/components/Gallery";

export function NavDrawer({ assets }) {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        padding: ["1rem 0 2rem", "3rem 0 4rem"],
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Gallery assets={assets}></Gallery>
    </Box>
  );

  return (
    <></>
    // <div>
    //   {["left", "right", "top", "bottom"].map((anchor) => (
    //     <Fragment key={anchor}>
    //       {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
    //       <Drawer
    //         anchor={anchor}
    //         // open={state[anchor]}
    //         // onClose={toggleDrawer(anchor, false)}
    //       >
    //         {list(anchor)}
    //       </Drawer>
    //     </Fragment>
    //   ))}
    // </div>
  );
}


export default function NavMenuIcon() {
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
        // onClick={}
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}

import React from "react";

import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

import { Outlet } from "react-router-dom";
const drawerWidth = 185;

import { Box, IconButton, Drawer } from "@mui/material";
import Menu from "./Home/Menu";
import NavBar from "./Home/NavBar";

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AppBar
          position="fixed"
          className="d-flex jjustify-content-center "
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <div className="d-flex">
            {" "}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="center"
              className="m-auto"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <NavBar />
          </div>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
          
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Menu />
          </Drawer>
          <Drawer
          
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Menu />
          </Drawer>
        </Box>
        <Outlet />
      </Box>
    </div>
  );
};
export default Dashboard;

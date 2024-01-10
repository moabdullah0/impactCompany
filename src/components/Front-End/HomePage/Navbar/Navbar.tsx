import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import nav from "../../../../assets/2.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeProviders } from "../../../../App";
import NavbarMobile from "./NavbarMobile";
import menuItems from "../../../../data/HomePage/NavbarData";

interface Props extends ThemeProviders {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar({ window, setMode, theme }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <div className="flex relative">
              <img src={nav} className="h-16" />
              <span className="mx-5 mt-5">Impact</span>
            </div>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
            <Button
              sx={{ color: "#fff" }}
              onClick={() =>
                setMode(theme.palette.mode == "light" ? "dark" : "light")
              }
            >
              <DarkModeIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <NavbarMobile
            handleDrawerToggle={handleDrawerToggle}
            mode={theme.palette.mode}
            setMode={setMode}
            theme={theme}
          />
        </Drawer>
      </nav>
    </Box>
  );
}

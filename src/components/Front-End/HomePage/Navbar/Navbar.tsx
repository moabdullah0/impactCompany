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
import NavbarMobile from "./NavbarMobile";
import LightModeIcon from "@mui/icons-material/LightMode";
import { grey } from "@mui/material/colors";
import { useGlobalContext } from "../../../Context/ThemeContext";
import { List } from "@mui/material";
import menuItems from "../../../../data/HomePage/NavbarmenueData";
import { Link } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar({ window }: Props) {
  const { mode, setMode } = useGlobalContext();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: grey[300] }}>
        <Toolbar >
          <div className="flex"  aria-label="open drawer">

         
          <IconButton
            color="info"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={nav} className="h-16 lg:opacity-0 sm:opacity-1   absolute right-[80%] top-[-5px]" alt="logo" />
          </div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex", alignItems: "center" } }}
          >
            <div className="flex relative">
              <img src={nav} className="h-16" alt="logo" />
              <span className="mx-5 mt-5 text-black">Impact</span>
            </div>
          </Typography>
          <List sx={{ display: { xs: "none", sm: "flex", gap: "10px", alignItems: "center" } }}>
            {menuItems.map((item, index) => (
              <Link to={item.link} key={index} className="text-blue-400">
                {item.title}
              </Link>
            ))}
            <Button
              sx={{ color: "#000" }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
          </List>
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
          <NavbarMobile handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>
    </Box>
  );
}

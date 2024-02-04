import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Navbar from "./Navbar/InfoNavbar";
import LightModeIcon from "@mui/icons-material/LightMode";
import CustomDrawerHeader from "./Navbar/DrawerNavbar";
import IconsSide from "../../../data/Dashboard/SidebarData";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useGlobalContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "./Sidebar/SidebarItems/AppBar";
import Drawer from "./Sidebar/SidebarItems/Drawer";
export const drawerWidth = 240;

export default function MiniDrawer() {
  const { mode, setMode } = useGlobalContext();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            className="text-black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>

      <Drawer component={"aside"} variant="permanent" open={open}>
        <CustomDrawerHeader theme={theme}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </CustomDrawerHeader>
        <Divider />
        <List>
          {IconsSide.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              {text.Items ? (
                open ? (
                  <Select
                    displayEmpty
                    value=""
                    sx={{ minWidth: "100%", opacity: open ? 1 : 0 }}
                    renderValue={() => text.title}
                  >
                    <MenuItem value="" disabled>
                      {text.title}
                      {text.icon}
                    </MenuItem>
                    {text.Items.map((centerItem, centerIndex) => (
                      <MenuItem key={centerIndex} value={centerItem.link}>
                        <Link to={centerItem.link}>
                          {centerItem.icon} {centerItem.title}
                        </Link>
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      px: 2.5,
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                )
              ) : (
                <Link to={text.link}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index === 0 ? <HomeIcon /> : text.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setMode(mode == "light" ? "dark" : "light")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {theme.palette.mode == "light" ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="DarkMode" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

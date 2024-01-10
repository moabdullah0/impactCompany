import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import nav from "../../../../assets/2.png";
import Box from "@mui/material/Box";
import menuItems from "../../../../data/HomePage/NavbarData";
import { ThemeProviders } from "../../../../App";
interface NavbarMobileProps extends ThemeProviders {
  handleDrawerToggle: () => void;
}
const NavbarMobile = ({
  handleDrawerToggle,
  setMode,
  mode,
}: NavbarMobileProps) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="flex relative">
        <img src={nav} className="h-16" />
        <span className="mx-5 mt-5">Impact</span>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => setMode(mode == "dark" ? "light" : "dark")}
          >
            <ListItemText primary={<DarkModeIcon />} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return <div>{drawer}</div>;
};

export default NavbarMobile;

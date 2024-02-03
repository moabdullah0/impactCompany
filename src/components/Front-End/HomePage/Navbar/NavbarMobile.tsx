import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import nav from "../../../../assets/2.png";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import menuItems from "../../../../data/HomePage/NavbarmenueData";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../Context/ThemeContext";
interface NavbarMobileProps  {
  handleDrawerToggle: () => void;
}

const NavbarMobile = ({
  handleDrawerToggle,
 
}: NavbarMobileProps) => {
  const {mode,setMode}=useGlobalContext()
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="flex relative">
        <img src={nav} className="h-16" />
        <span className="mx-5 mt-5">Impact</span>
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding >
            <ListItemButton sx={{ textAlign: "center", alignItems: "center" }}>
              <Link to={item.link} className="text-center text-blue-600 px-[80px]">
                {item.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => setMode(mode == "dark" ? "light" : "dark")}
          >
            <ListItemText
              primary={mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return <div>{drawer}</div>;
};

export default NavbarMobile;

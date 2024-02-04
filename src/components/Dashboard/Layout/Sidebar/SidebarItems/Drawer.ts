import { drawerWidth } from "../../LayoutHome";
import closedMixin from "./closedMixin";
import openedMixin from "./openedMixin";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        ...openedMixin(theme),
      },
    }),
    ...(!open && {
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        ...closedMixin(theme),
      },
    }),
  }));
  export default Drawer
import { Theme, CSSObject } from "@mui/material/styles";
import { drawerWidth } from "../../LayoutHome";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export default openedMixin;

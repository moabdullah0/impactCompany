import { styled, Theme } from "@mui/material/styles";

interface CustomDrawerHeaderProps {
  theme: Theme;
}

const CustomDrawerHeader = styled("div")<CustomDrawerHeaderProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

export default CustomDrawerHeader;

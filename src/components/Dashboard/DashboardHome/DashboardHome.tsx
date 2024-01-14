import MiniDrawer from "../Layout/LayoutHome";
import Home from "../Home/Home";
import { Themedark } from "../../Context/ThemeContext";
import { ThemeProvider, Theme, createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import { useState } from "react";

const DashboardHome = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme: Theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        light: grey[200],
        main: blue[500],
        dark: "#0000",
      },
    },
  });

  return (
    <Themedark.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={darkTheme}>
        <MiniDrawer />
        <Home />
      </ThemeProvider>
    </Themedark.Provider>
  );
};

export default DashboardHome;

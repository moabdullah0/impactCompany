import { useTheme } from "@mui/material/styles";
import MiniDrawer from "./components/Dashboard/Layout/LayoutHome";
import Maintest from "./components/Dashboard/Home/Home";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useState } from "react";
import { createTheme, Theme } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";

export interface ThemeProvider{
  mode:"light"|"dark"
  setMode: (mode: "light" | "dark") => void;
}
function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme: Theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        light: grey[200],
        main: blue[500],
        dark: "#0000", // Provide a valid color string here
      },
    },
  });

  const theme = useTheme();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <MiniDrawer setMode={setMode} mode={"light"} />

      <Maintest theme={theme} />
    </ThemeProvider>
  );
}

export default App;

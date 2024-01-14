import Navbar from "./Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import AboutCompany from "./Main/AboutCompany";
import Landing from "./Main/Landing/Landing";
import Cards from "./Main/Cards/Cards";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";
import { Themedark } from "../../Context/ThemeContext";

export interface ThemeProviders {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
  theme?: Theme;
}
const HomePage = () => {
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
        <div dir="rtl">
          <CssBaseline />
          <Navbar />
          <Landing />
          <AboutCompany />

          <Cards />
          <Footer />
        </div>
      </ThemeProvider>
    </Themedark.Provider>
  );
};

export default HomePage;

import { useState } from "react";
import { Themedark } from "./components/Context/ThemeContext";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
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
        <RouterProvider router={router} />
      </ThemeProvider>
    </Themedark.Provider>
  );
}

export default App;

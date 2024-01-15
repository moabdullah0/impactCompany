import { createContext, useContext } from "react";

import { ThemeProvider, Theme } from "@mui/material/styles";
interface ThemeProvider {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
  theme?: Theme;
}

export const Themedark = createContext<ThemeProvider>({
  mode: "light",
  setMode: () => {},
});

export const useGlobalContext = () => useContext(Themedark);

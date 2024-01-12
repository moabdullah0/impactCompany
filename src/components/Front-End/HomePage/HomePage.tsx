import Navbar from "./Navbar/Navbar";

import { ThemeProviders } from "../../../App";
import {  CssBaseline } from "@mui/material";
import AboutCompany from "./Main/AboutCompany";

import Landing from "./Main/Landing/Landing";
import Cards from "./Main/Cards/Cards";
import Footer from "./Footer/Footer";

const HomePage = ({ setMode, mode }: ThemeProviders) => {
 
  return (
    <div
     
      dir="rtl"
    >
      <CssBaseline />
      <Navbar setMode={setMode}  mode={mode} />
      <Landing setMode={setMode}  mode={mode}/>
        <AboutCompany setMode={setMode}  mode={mode}/>
    
    <Cards setMode={setMode}  mode={mode}/>
    <Footer setMode={setMode}  mode={mode}/>
    </div>
  );
};

export default HomePage;

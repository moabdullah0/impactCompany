import Navbar from "./Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import AboutCompany from "./Main/AboutCompany";
import Landing from "./Main/Landing/Landing";

import Footer from "./Footer/Footer";
import HallCard from "./Main/Cards/HallCard";



const HomePage = () => {


  return (
  
        <div dir="rtl">
          <CssBaseline />
          <Navbar />
          <Landing />
          <AboutCompany />

          <HallCard />
          <Footer />
        </div>
     
  );
};

export default HomePage;

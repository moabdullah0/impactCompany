import Navbar from "./Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import AboutCompany from "./Main/AboutCompany";
import Landing from "./Main/Landing/Landing";
import Cards from "./Main/Cards/Cards";
import Footer from "./Footer/Footer";



const HomePage = () => {


  return (
  
        <div dir="rtl">
          <CssBaseline />
          <Navbar />
          <Landing />
          <AboutCompany />

          <Cards />
          <Footer />
        </div>
     
  );
};

export default HomePage;

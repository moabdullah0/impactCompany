import { CssBaseline } from "@mui/material";
import AboutCompany from "./AboutCompany/AboutCompany";
import Landing from "./Main/Landing/Landing";

import Footer from "./Footer/Footer";
import HallCard from "./Main/Cards/HallCard";
import Nav from "./nav/nav";

const HomePage = () => {
  return (
    <div dir="rtl" className="relative">
      <CssBaseline />
      {/* <Navbar /> */}
      <Nav />
      <Landing />
      <AboutCompany />

      <HallCard />
      <Footer />
    </div>
  );
};

export default HomePage;

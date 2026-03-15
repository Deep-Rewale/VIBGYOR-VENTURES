import React from "react";
import LandingPage from "../components/Home/LandingPage";
import Marque from "../components/Home/Marque";
import HomeAbout from "../components/Home/HomeAbout";
import HowItsWork from "../components/Home/HowItsWork";
import CorporatePicks from "../components/Home/CorporatePicks";
import OurVision from "../components/Home/OurVision";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Marque />
      <HomeAbout />
      <HowItsWork />
      <CorporatePicks />
      <OurVision />
      <Footer />
    </>
  );
};

export default Home;

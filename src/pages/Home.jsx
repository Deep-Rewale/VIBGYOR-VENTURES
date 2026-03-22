import React from "react";
import LandingPage from "../components/Home/LandingPage";
import Marque from "../components/Home/Marque";
import HomeAbout from "../components/Home/HomeAbout";
import HowItsWork from "../components/Home/HowItsWork";
import CorporatePicks from "../components/Home/CorporatePicks";
import OurVision from "../components/Home/OurVision";
import Footer from "../components/Footer";
import Brands from "../components/Home/Brands";
import Testimonials from "../components/Home/Testimonials";


const Home = () => {
  return (
        <div >
      <LandingPage />
      <Marque />
      <HomeAbout />
      <HowItsWork />
      <CorporatePicks />
      <OurVision />
      <Brands />
      <Testimonials />
      <Footer heading1={"Experiences"} heading2={"That Elevate"} heading3={"Your Brand."} />
    </div>
  );
};

export default Home;

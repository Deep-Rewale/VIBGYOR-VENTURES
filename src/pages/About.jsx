import React from "react";
import AboutHero from "../components/About/AboutHero";
import Aboutus from "../components/About/Aboutus";
import Marque from "../components/Home/Marque";
import HowItsWork from "../components/Home/HowItsWork";
import Team from "../components/About/Team";
import ReadyToGifting from "../components/Corporate Gifting/ReadyToGifting"
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <Aboutus />
      <Marque />
      <HowItsWork />
      <Team/>
      <ReadyToGifting  text1={"Ready"} text2={"to start"} text3={"Project"} btnText={"start project"}/>
      <Footer heading1={"we are"} heading2={"Vibgyor"} heading3={"Ventures"} /> 
    </div>
  );
};

export default About;

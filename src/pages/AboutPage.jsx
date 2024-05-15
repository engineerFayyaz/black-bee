import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutCard from "../components/About/AboutCard";
import PartnerScroll from "../components/About/PartnerScroll";
import OurTeam from "../components/About/OurTeam";

const AboutPage = () => {
  return (
    <div className="lg:px-40 px-10 pt-40 flex flex-col gap-20 lg:gap-40  lg:text-start text-center text-wrap ">
      <div>
        <AboutHero />
      </div>
      <div>
        <AboutCard /> 
      </div>
      <div>
        <PartnerScroll /> 
      </div>
      <div>
        <OurTeam /> 
      </div>
    </div>
  );
};

export default AboutPage;

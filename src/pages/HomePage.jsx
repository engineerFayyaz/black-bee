import React from "react";
import Hero from "../components/Home/Hero";
import BuisnessGrowth from "../components/Home/BuisnessGrowth";
import Banner from "../components/Home/Banner";
import Offer from "../components/Home/Offer";
import Testimonials from "../components/Home/Testimonials.";

const HomePage = () => {
  return (
    <main className="pt-40 flex-col gap-20  lg:text-start text-center text-wrap">
      <div className=" lg:mb-0 mb-20">
        <Hero />
      </div>
      <div className="flex flex-col gap-40">
        <div className="lg:px-32 px-10">
          <BuisnessGrowth />
        </div>
        <div className="lg:px-32 px-10">
          <Banner />
        </div>
        <div className="lg:px-32 px-10 ">
          <Offer />
        </div>
        <div className="">
          <Testimonials />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

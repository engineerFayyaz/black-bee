import React from "react";
import hero from "../../assets/Home/hero2.png";
import underline from "../../assets/Home/shape-03.svg";
import arrowImage from "../../assets/Home/sip-b-arrow.decb954d.svg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="lg:h-screen relative lg:px-32 px-10">
      <img
        src={arrowImage}
        alt=""
        className="absolute top-[-100] left-0 opacity-20 lg:block hidden"
        data-aos="fade-right"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap20 gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-10  lg:items-start items-center">
          <div className="relative">
            <h1
              className="lg:text-6xl text-3xl font-extrabold leading-normal "
              id="location-text"
              data-aos="fade-up"
            >
              We're Digital Marketing Creative Gigg!
            </h1>
            <img
              src={underline}
              alt=""
              className="absolute bottom-[-10] lg:block lg:left-0 left-[20%]"
              data-aos="fade-up"
            />
          </div>

          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-4 flex-wrap" data-aos="fade-up">
            {/* <button className="border rounded-md px-4 py-2 bg-purple-600 text-white button">
              Find Solution
            </button> */}
           <Link to="/contact"> <button className="text-lg font-montserrat font-medium flex items-center gap-2 rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out  button">
            Find Solution
            </button></Link>
            <button className="text-lg font-montserrat font-medium  border rounded-xl px-4 py-2 button hover:bg-black hover:text-white transition-all ease-in-out duration-200">
              Learn more
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
          data-aos="fade-down"
        >
          <img
            src={hero}
            alt="hero"
            className="hero-image w-full drop-shadow-2xl   "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

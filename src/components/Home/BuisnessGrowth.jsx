import React from "react";
import { Link } from "react-router-dom";

import about from "../../assets/Home/about-01.jpg";
import { HiMiniCheckBadge } from "react-icons/hi2";
// import useStaggeredBottomToTopAnimation from "../../hooks/useBottomToTopAnimation";

const BuisnessGrowth = () => {
  // useStaggeredBottomToTopAnimation(".");
  return (
    <div className="">
      <div className="w-full flex lg:flex-row flex-col-reverse lg:text-start text-center justify-between gap-20">
        <div className="lg:w-1/2 w-full flex flex-col lg:justify-start justify-center lg:items-baseline items-center gap-10 ">
          <img
            src={about}
            alt="about"
            className="shadow-lg w-full lg:w-[80%]"
            data-aos="fade-up"
          />
          <p
            className="lg:text-5xl text-2xl font-normal font-montserrat "
            data-aos="fade-up"
          >
            Incredibly fast and amazing features
          </p>
          <p
            className="text-lg font-normal font-montserrat  pr-6 "
            data-aos="fade-up"
          >
            We provide digital experience services to startups and small
            businesses velit purus aliquet, massa fringilla
          </p>
          <button
            className="text-lg font-montserrat font-medium flex items-center gap-2 rounded-lg py-4 px-8 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out "
            data-aos="fade-up"
          >
            <Link to="/contact">Contact us</Link>
          </button>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col gap-10 pt-10  ">
          <span
            className="text-lg font-outfit text-orange-500  "
            data-aos="fade-up"
          >
            BUSINESS GROWTH
          </span>
          <h3
            className="lg:text-6xl text-2xl font-montserrat lg:py-6"
            data-aos="fade-up"
          >
            Best Digital <br /> Creative Agency
          </h3>
          <p
            className="text-lg font-normal font-montserrat "
            data-aos="fade-up"
          >
            There are many variations of passages of lorem in free market to
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words
          </p>

          <div className="flex flex-col gap-4 w-full font-montserrat">
            <div
              className="flex lg:gap-4 gap-2 items-center justify-start border rounded-md lg:text-xl text-sm lg:w-full p-4 shadow-lg flex-shrink text-start"
              data-aos="fade-up"
            >
              <span className="text-orange-500">
                <HiMiniCheckBadge />
              </span>{" "}
              <p>For marketing professionals</p>
            </div>
            <div
              className="flex lg:gap-4 gap-2 items-center justify-start border rounded-md lg:text-xl text-sm lg:w-full p-4 shadow-lg flex-shrink text-start"
              data-aos="fade-up"
            >
              <span className="text-orange-500">
                <HiMiniCheckBadge />
              </span>{" "}
              <p>The New Event Marketing Opportunity</p>
            </div>
            <div
              className="flex lg:gap-4 gap-2 items-center justify-start border rounded-md lg:text-xl text-sm lg:w-full p-4 shadow-lg flex-shrink text-start"
              data-aos="fade-up"
            >
              <span className="text-orange-500">
                <HiMiniCheckBadge />
              </span>{" "}
              <p>The New Event Marketing Opportunity</p>
            </div>
          </div>
          <p
            className="text-lg font-normal font-montserrat "
            data-aos="fade-up"
          >
            Variations of passages of lorem in free market to available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuisnessGrowth;

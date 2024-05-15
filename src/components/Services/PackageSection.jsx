import React from "react";
import { Link } from "react-router-dom";
import { packageData } from "../../utils/PackageData";
import PackageCard from "./PackageCard";

const PackageSection = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      {/* -----------------------------text section------------------------------------------ */}
      <div className="flex lg:flex-row flex-col justify-between gap-10 items-center lg:text-start text-center">
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <span
            className="text-lg font-outfit text-orange-500"
            data-aos="fade-up"
          >
            PACKAGES
          </span>
          <h3
            className="lg:text-6xl text-2xl font-montserrat lg:py-6"
            data-aos="fade-up"
          >
            Choose the optimal price plan
          </h3>
        </div>
        <div
          className="lg:w-1/2 w-full flex flex-col lg:items-start items-center gap-4 font-montserrat"
          data-aos="fade-up"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur dolore modi, animi iure magnam facere, sint officia
            dolorem quis voluptas placeat? Modi similique dolores iusto quae
            consequuntur vitae, fugit minus.
          </p>
          <Link to="/contact">
            {" "}
            <button className="text-lg max-w-52 text-center font-montserrat font-medium flex items-center gap-2 rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out  button">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      {/* ------------------------------------card section---------------------------------------------------- */}
      <div
        className="w-full flex lg:flex-row flex-col flex-wrap lg:justify-between gap-10 justify-center items-center"
        data-aos="fade-up"
      >
        {packageData.map((pack, index) => (
          <PackageCard data={pack} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PackageSection;

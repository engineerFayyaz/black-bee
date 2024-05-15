import React from "react";
// import { FaCircleCheck } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PackageCard = ({ data }) => {
  return (
    <div className=" lg:w-auto w-full flex flex-col justify-center items-center gap-6 font-montserrat border rounded-xl shadow-2xl p-10 text-center hover:scale-105 transition-all ease-in-out duration-200">
      <div className="w-full flex flex-col justify-center items-center gap-4 ">
        <h4 className="text-xl font-medium">{data.planTitle}</h4>
        <span className="text-4xl font-bold">
          {data.price}{" "}
          <span className="text-xl text-slate-400 font-medium">/mo</span>
        </span>

        <span className="text-6xl text-[#FF4D30] py-6 ">{data.icon}</span>
      </div>

      <ul className="text-start">
        {data.features.map((feature, index) => (
          <div className="flex items-center gap-4 pb-4">
            {" "}
            <span className="text-orange-500 text-xl">
              <IoShieldCheckmarkOutline />
            </span>{" "}
            <li key={index}>{feature}</li>
          </div>
        ))}
      </ul>
    <Link to="/contact">  <button className="w-40 text-center text-sm font-montserrat font-medium rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
        Get Started
      </button></Link>
    </div>
  );
};

export default PackageCard;

import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../utils/services";
import offerImg from "../../assets/Home/02.png";


const Offer = () => {
  return (
    <div className="offer">
      <div className="flex lg:flex-row flex-col justify-between gap-10 ">
        {/* left side */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <span
            className="text-lg font-outfit text-orange-500"
            data-aos="fade-up"
          >
            WHAT WE OFFER
          </span>
          <h3
            className="lg:text-6xl text-2xl font-montserrat lg:py-6"
            data-aos="fade-up"
          >
            What We’re Offering Creative Digital Service
          </h3>
          <img
            src={offerImg}
            alt="offer"
            className="w-96 drop-shadow"
            data-aos="fade-right"
          />
        </div>

        {/* right side */}
        <div className="lg:w-1/2 w-full flex flex-col gap-10 relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="sticky shadow-2xl"
              style={{ top: `calc(70px * ${index+1})` }}
            >
              <ServiceCard data={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;

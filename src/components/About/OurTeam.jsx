import React from "react";
import { ourTeam } from "../../utils/OurTeam";
// import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="font-montserrat flex flex-col gap-2 justify-center items-center text-center mb-4">
        <h3 className="text-lg text-orange-500 " data-aos="fade-up">
          OUR TEAM
        </h3>
        <p className="lg:w-96 text-wrap" data-aos="fade-up">
          Connect with us to explore endless possibilities and elevate your
          brand's digital presence.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center lg:gap-10 gap-4 relative">
        {ourTeam.map((member, index) => (
          <a
            key={index}
            href={member.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="lg:static sticky top-20"
          >
            <div
              key={index}
              className="w-52 h-full border rounded-xl shadow-2xl hover:scale-105 transition-all ease-in-out duration-300 flex flex-col gap-4 justify-center items-center text-center bg-[#002244]"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-60 object-cover rounded-t-xl"
                // Adjust 'h-40' to set the desired height for the images
              />
              <div className=" text-wrap flex flex-col justify-center gap-1 font-montserrat p-4">
                <span className="text-sm font-medium text-white">
                  {member.name}
                </span>
                <span className="text-xs font-normal text-orange-500">
                  {member.role}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

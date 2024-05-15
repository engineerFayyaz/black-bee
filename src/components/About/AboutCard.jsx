import React from "react";
import { aboutCardData } from "../../utils/AboutCardData";

const AboutCard = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="font-montserrat flex flex-col gap-2 justify-center items-center text-center">
        <h3 className="text-lg text-orange-500 " >
          HOW IT WORKS
        </h3>
        <p className="lg:w-96 text-wrap" data-aos="fade-up">
          Through thorough research and meticulous data collection, we optimize
          targeting to deliver impactful results for our clients as a digital
          marketing agency.
        </p>
      </div>

      <div
        className="flex justify-center gap-10 items-stretch flex-wrap relative"
        data-aos="fade-up"
      >
        {aboutCardData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 text-center lg:max-w-60 lg:w-auto w-full border rounded-xl shadow-2xl px-4 py-10 sticky bg-[#002244] text-white"
            style={{ minWidth: "240px", top: `calc(80px * ${index + 1})` }}
          >
            <span className="text-4xl font-bold text-orange-500 flex justify-center">
              {/* Move the flex and justify-center to the outer span */}
              {data.icons}
            </span>
            <span className="font-montserrat pt-4 text-3xl font-medium">
              {data.title}
            </span>
            <span className="font-outfit text-sm font-light leading-relaxed p-4">
              {data.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;

import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-96 w-auto border border-slate-400 outline-none rounded-xl shadow-xl mx-2 flex flex-col">
      <div className="text-wrap p-6 bg-[#002244] font-montserrat text-sm text-white rounded-t-xl flex-grow">
        <span className="text-2xl text-orange-500">
          <FaQuoteLeft />
        </span>
        <div className="flex item-stretch h-full">
          <p className="">{testimonial.content.slice(0,100)}...</p>
        </div>
      </div>
      <div className="flex gap-4 p-6 justify-start items-center bg-white text-black rounded-b-xl">
        <img
          src={testimonial.image}
          alt=""
          className="w-10 rounded-full outline outline-white"
        />
        <div className="flex flex-col font-outfit text-start">
          <span>{testimonial.name}</span>
          <span className="text-orange-500">{testimonial.organisation}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

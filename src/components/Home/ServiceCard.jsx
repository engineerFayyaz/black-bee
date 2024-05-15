import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <div className="w-full h-96 flex flex-col gap-6 bg-[#002244] text-white p-10 rounded-xl outline outline-2 border-black border-2">
      <div className="flex flex-wrap justify-start items-center gap-4">
        <span className="lg:text-6xl text-3xl text-orange-500">
          {data.icon}
        </span>
        <span className="lg:text-2xl text-xl font-montserrat">
          {data.title}
        </span>
      </div>
      <div>{data.content}</div>
    </div>
  );
};

export default ServiceCard;

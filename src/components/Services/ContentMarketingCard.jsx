import React from "react";

const ContentMarketingCard = ({ data }) => {
  return (
    <div className="lg:w-60 w-full flex flex-col gap-20 border rounded-xl p-4 shadow-2xl">
      <span className="text-6xl text-orange-500 font-semibold">{data.icon}</span>
      <div className="flex flex-col gap-2">
         <span className="text-xl font-montserrat font-bold">{data.title}</span>
      <span className="text-lg font-outfit font-light">{data.description}</span>
      </div>
     

    </div>
  );
};

export default ContentMarketingCard;

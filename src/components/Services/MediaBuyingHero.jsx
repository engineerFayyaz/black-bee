import React from "react";
import { ContentMarketingData } from "../../utils/ContentMarketingData";
import MediaBuyingCard from "./MediaBuyingCard";

const MediaBuyingHero = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* <div className="mb-10">
        <span className="text-sm font-montserrat font-medium">
          HOME/SERVICES/
          <span className="text-orange-500">MEDIA BUYING</span>
        </span>
      </div> */}
      <h2
        className="text-lg lg:text-2xl text-orange-500 font-montserrat font-semibold "
        data-aos="fade-down"
      >
        MEDIA BUYING
      </h2>
      {/* -----------------------content section----------------------------- */}
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start items-center gap-10">
        {/* ------------------------left section----------------------- */}

        <div className="lg:w-1/2 w-full flex flex-col gap-20 lg:justify-start justify-center">
          <div className="flex flex-col gap-4 lg:pr-8">
            <h4 className="text-4xl font-bold font-montserrat">
              WE OFFER SEARCH ENGINE OPTIMIZED, QUALITY CONTENT WRITING
              SERVICES.
            </h4>
            <p
              className="text-lg font-normal font-montserrat"
              data-aos="fade-up"
            >
              Effective websites require quality articles to best reflect their
              brand or services. If you’d like your website to accomplish your
              sales goals, it must comprise internet search engine optimized,
              descriptive, and first, and content that is comprehensible. At
              Thrive, we offer our clients a satisfied writing service that
              meets the high standards that a specialist, high quality internet
              site requires.
            </p>
            <p
              className="text-lg font-normal font-montserrat "
              data-aos="fade-up"
            >
              We are an expert, personable web marketing support, and we will
              take the time to operate closely together with you how best to
              convey your site’s purpose. We will thoroughly research your
              website’s brand, services, purpose, and audience to tailor made
              material which efficiently and tells your story.
            </p>
          </div>
        </div>
        {/* ------------------------right section----------------------- */}
        <div
          className="lg:w-1/2  w-full flex flex-wrap gap-10"
          data-aos="fade-up"
        >
          {ContentMarketingData.map((data, index) => (
            <div key={index} className="lg:w-60 w-full">
              <MediaBuyingCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaBuyingHero;

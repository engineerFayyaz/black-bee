import React from "react";
import about from "../../assets/About/file.png";
import { LiaConnectdevelop } from "react-icons/lia";

const AboutHero = () => {
  return (
    <div>
      {/* <div className="mb-10">
        <span className="text-sm font-montserrat font-medium">
          HOME/<span className="text-orange-500">ABOUT</span>
        </span>
      </div> */}
      <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center lg:items-start gap-20">
        <div className="lg:w-1/2 w-full">
          <img
            src={about}
            alt=""
            className="drop-shadow-2xl"
            data-aos="fade-right"
          />
        </div>

        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-4 lg:w-1/2 w-full">
          <h2
            className="text-lg lg:text-2xl text-orange-500 font-montserrat font-semibold "
            data-aos="fade-down"
          >
            ABOUT US
          </h2>
          <span className="text-xl font-montserrat" data-aos="fade-down">
            <span className="text-4xl font-bold ">Blackbee-Digital</span>
            <br />
            An Award Winning Digital Marketing Agency
          </span>
          <div className="leading-relaxed font-outfit font-light flex flex-col gap-2 text-start">
            <div className="flex items-center gap-2" data-aos="fade-down">
              {" "}
              <span className="text-lg text-orange-500">
                <LiaConnectdevelop />
              </span>
              <span>
                Developing a brand which helps companies to produce their
                individuality from ZERO.
              </span>
            </div>{" "}
            <div className="flex items-center gap-2" data-aos="fade-down">
              {" "}
              <span className="text-lg text-orange-500">
                <LiaConnectdevelop />
              </span>
              <span>
                Developing a work culture which permits workers to not only
                create the job, but also believe.
              </span>
            </div>
            <div className="flex items-center gap-2" data-aos="fade-down">
              {" "}
              <span className="text-lg text-orange-500">
                <LiaConnectdevelop />
              </span>
              <span>
                Developing a new which may be known as an influencer and a
                business pioneer, and one which stands out from the audience.
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

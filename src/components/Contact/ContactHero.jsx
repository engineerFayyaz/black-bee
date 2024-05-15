import React from "react";
import { ImLocation2 } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";

const ContactHero = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* <div className="mb-10">
        <span className="text-sm font-montserrat font-medium">
          HOME/<span className="text-orange-500">CONTACT US</span>
        </span>
      </div> */}
      {/* ---------------------------content section------------------------------------- */}
      <div className="flex lg:flex-row  flex-col lg:gap-20 gap-10 lg:justify-between justify-center lg:items-start items-center">
        {/* -----------------left section------------------ */}
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col gap-20 lg:justify-start justify-center ">
            <h2
              className="text-lg lg:text-2xl text-orange-500 font-montserrat font-semibold "
              data-aos="fade-down"
            >
              CONTACT US
            </h2>
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9870098184197!2d87.33324917990909!3d23.53296962420641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771cc704ce0b7%3A0xd84f8a970b7686f8!2sstreet-03%2C%20Saratpally%2C%20Bidhannagar%2C%20Durgapur%2C%20West%20Bengal%20713206!5e0!3m2!1sen!2sin!4v1713684845078!5m2!1sen!2sin"
              width="250"
              height="250"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              data-aos="fade-right"
            ></iframe>
          </div>
        </div>

        {/* -----------------right section------------------------------------ */}
        <div className="flex flex-col gap-20">
          <h3
            className="text-lg text-orange-500 font-montserrat text-center lg:text-start"
            data-aos="fade-up"
          >
            OUR ADDRESS
          </h3>
          <p className="font-outfit text-lg font-normal" data-aos="fade-up">
            Black Bee Digital on strong business ethics and driven by people
            with many years of hands-on industry.
          </p>

          {/* -------------------card section------------------------------ */}
          <div className="flex flex-col gap-6 text-start">
            <div className="flex gap-4 items-center" data-aos="fade-up">
              <span className="text-4xl text-orange-500">
                <ImLocation2 />
              </span>
              <span className="text-lg font-montserrat font-light">
                Sarat Pally, Street No.:3, City:- Durgapur Dist.: West
                Barddhaman, West Bengal, PIN- 713206, INDIA
              </span>
            </div>
            <div className="flex gap-4 items-center" data-aos="fade-up">
              <span className="text-4xl text-orange-500">
                <HiPhone />
              </span>
              <span className="text-lg font-montserrat font-light flex flex-col gap-1">
                <span>Sales: +91 9832194042 </span>
                <span>Support: +91 9832781092</span>
              </span>
            </div>
            <div className="flex gap-4 items-center" data-aos="fade-up">
              <span className="text-4xl text-orange-500">
                <IoIosMail />
              </span>
              <span className="text-lg font-montserrat font-light flex flex-col gap-1">
                <span>info@blackbee-digital.com</span>
                <span>admin@blackbee-digital.com</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="mt-20 lg:px-32 lg:py-20 py-10  px-20 w-full bg-[#002244] text-white text-wrap lg:text-start text-center">
        <div className="flex lg:flex-row lg:justify-between lg:items-start justify-center items-center flex-col flex-wrap gap-10">
          {/* ---------------------------------- */}
          <div className="flex flex-col gap-4 lg:w-1/3 w-full">
            <h2 className="font-bold text-lg">blackBee.</h2>
            <span className="lg:text-4xl text-2xl font-montserrat font-medium">
              It's Time to Pull in <br />a{" "}
              <span className="text-orange-500"> Professional</span>
            </span>
            <span className="text-wrap font-montserrat">
              Black Bee Digital on strong business ethics and driven by people
              with many years of hands-on industry.
            </span>
          </div>
          {/* ----------------------------------------- */}

          <div className="flex flex-col gap-4 font-montserrat">
            <h4 className="text-lg font-medium text-white">Menu</h4>
            <ul className="flex flex-col gap-2 text-sm  text-[#92989B]">
              <li className="cursor-pointer hover:text-orange-500">HOME</li>
              <li className="cursor-pointer hover:text-orange-500">About us</li>
              <li className="cursor-pointer hover:text-orange-500">Services</li>
              <li className="cursor-pointer hover:text-orange-500">Blogs</li>
              <li className="cursor-pointer hover:text-orange-500">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 font-montserrat">
            <h4 className="text-lg font-medium text-white">Useful links</h4>
            <ul className="flex flex-col gap-2 text-sm  text-[#92989B]">
              <li className="cursor-pointer hover:text-orange-500">Terms</li>
              <li className="cursor-pointer hover:text-orange-500">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Help Center
              </li>
              <li className="cursor-pointer hover:text-orange-500">Site Map</li>
              {/* <li className="cursor-pointer hover:text-orange-500">Contact</li> */}
            </ul>
          </div>
          <div className="flex flex-col gap-4 font-montserrat">
            <h4 className="text-lg font-medium text-white">Contact us</h4>
            <ul className="flex flex-col gap-2 text-sm  text-[#92989B] text-start">
              <li className=" flex gap-2 items-center">
                <span className="text-orange-500 text-lg">
                  <BsFillBuildingsFill />
                </span>
                <span>Durgapur, India</span>
              </li>
              <li className="cursor-pointer hover:text-orange-500 flex gap-2 items-center">
                <Link
                  className="flex gap-2 items-center"
                  // to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to={{test@gmail.com}}"
                  target="_blank"
                >
                  <span className="text-orange-500 text-lg">
                    <MdEmail />
                  </span>
                  <span>info@blackbee-digital.com</span>
                </Link>
              </li>
              <li className="cursor-pointer hover:text-orange-500  flex gap-2 items-center  ">
                <Link
                  className="flex gap-2 items-center"
                  to="tel:+919832781092"
                >
                  {" "}
                  <span className="text-orange-500 text-lg">
                    <FaPhoneVolume />
                  </span>
                </Link>

                <span>+91 9832781092</span>
              </li>
              <li className="flex gap-2 justify-start items-center text-xl mt-6">
                <span className="cursor-pointer hover:text-orange-500">
                  <Link to="https://facebook.com" target="_blank">
                    <CiFacebook />
                  </Link>
                </span>
                <span className="cursor-pointer hover:text-orange-500">
                  <CiInstagram />
                </span>
                <span className="cursor-pointer hover:text-orange-500">
                  <CiTwitter />
                </span>
                <span className="cursor-pointer hover:text-orange-500">
                  <CiLinkedin />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-[#92989B] bg-[#103559] flex justify-between items-center lg:px-32 lg:py-10 py-6  px-20 font-montserrat font-light text-sm">
        <span>©{new Date().getFullYear()} blackBee, All Rights Reserved.</span>
        <span>
          Developed by:{" "}
          <Link
            target="_blank"
            to="https://anupz.dev"
            className="hover:text-orange-500"
          >
            anupz.dev
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;

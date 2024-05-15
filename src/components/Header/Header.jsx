import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = ({ themeToggler, themeMode }) => {
  const [isShow, setIsShow] = useState(false);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    // Set initial theme mode based on browser storage or default to light mode
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
    themeToggler();
  };

  return (
    <header
      className={`w-full fixed z-20 shadow-lg ${
        themeMode === "light"
          ? "bg-white text-black transition-all  ease-in-out duration-500"
          : "bg-[#565656] text-white transition-all ease-in-out duration-500"
      }`}
    >
      <>
        <nav className="flex lg:px-20 px-10 py-6 w-full justify-between items-center">
          <h1 className="text-xl font-bold font-montserrat">
            <Link to="/">blackBee.</Link>{" "}
          </h1>
          <div className="lg:block hidden">
            <ul className="flex gap-10 font-outfit">
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/about"> About Us</Link>
              </li>
              <li
                className="cursor-pointer transition-all ease-in-out duration-100 relative"
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                <span className=" hover:text-orange-400">Services</span>
                {showSubMenu && (
                  <ul
                    className={`absolute z-21 transition-all ease-in-out duration-300 text-start p-6 w-60 shadow-b-lg flex flex-col gap-2 ${
                      themeMode === "light"
                        ? "bg-white text-black transition-all ease-in-out duration-500"
                        : "bg-[#565656] text-white transition-all ease-in-out duration-500"
                    }`}
                  >
                    {/* <li className="hover:text-orange-500">
                      <Link to="/services/packages">Packages</Link>
                    </li> */}
                    <li className="hover:text-orange-500">
                      <Link to="/services/content-marketing">
                        Content Marketing
                      </Link>
                    </li>
                    <li className="hover:text-orange-500">
                      <Link to="/services/media-buying">Media Buying</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="blogs">Blogs</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <DarkModeSwitch
              style={{
                color: "black",
                stroke: "currentColor",
              }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
            <button
              className="block lg:hidden text-2xl font-semibold transition-all ease-in-out duration-200"
              onClick={() => setIsShow(true)}
            >
              <FiMenu />
            </button>
          </div>
        </nav>
      </>
      {isShow && (
        <>
          {/* -------------------overlay------------------------ */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={() => setIsShow(false)}
          ></div>
          {/* -------------------overlay------------------------ */}

          {/* -------------------------phone navbar-------------------------------- */}
          <nav className="absolute top-0 right-0 h-screen bg-white text-black font-montserrat font-medium w-1/2 flex justify-centter pt-6 items-center flex-col gap-10 transition-all ease-in-out duration-300 z-20">
            <button onClick={() => setIsShow(false)} className="text-xl">
              <FaRegWindowClose />
            </button>
            <ul className="flex flex-col justify-center gap-4 font-outfit">
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/">HOME</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/about"> ABOUT US</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/services">SERVICES</Link>
                <ul className="pl-2 pt-2">
                  {/* <li className="hover:text-orange-500">
                    <Link to="/services/packages">Packages</Link>
                  </li> */}
                  <li className="hover:text-orange-500">
                    <Link to="/services/content-marketing">
                      Content Marketing
                    </Link>
                  </li>
                  <li className="hover:text-orange-500">
                    <Link to="/services/media-buying">Media Buying</Link>
                  </li>
                </ul>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="blogs">BLOGS</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;

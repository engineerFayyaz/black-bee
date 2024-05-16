import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AdminHeader = ({ themeToggler, themeMode }) => {
  const [isShow, setIsShow] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const [showSubMenu, setShowSubMenu] = useState(false);

  //   handle authentication
  const handleLogout = () => {
    auth.signOut();

    toast.success("you are logged out");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  //   handle user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <header
      className="w-full fixed z-20 shadow-lg bg-light"
    >
      <>
        <nav className="flex lg:px-20 px-10 py-6 w-full justify-between items-center">
          <h1 className="text-xl font-bold font-montserrat">
            <Link to="/admin/add_Blog">blackBee.</Link>{" "}
          </h1>
          <div className="lg:block hidden">
            <ul className="flex gap-10 font-outfit">
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/admin/add_Blog">Add Blogs</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/admin/Contacts_Info"> Check Contact Details</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
               {user ? (
                <button className="text-center text-lg font-montserrat font-medium justify-center flex items-center gap-2 rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out button"
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
                >
                    <span className=" hover:text-orange-400"> {user.email.split("@")[0]}</span>
                    {showSubMenu && (
                  <ul
                    className="absolute z-21 transition-all ease-in-out duration-300 text-start p-2 shadow-b-lg flex bg-dark flex-col gap-2  rounded-4 "

                    style={{top:"4.3rem", width:"15%"}}
                  >
                    <li className="hover:text-orange-500">
                      <Link onClick={handleLogout}>
                       Logout
                      </Link>
                    </li>
                  </ul>
                )}
                </button>
              ) : (
                <button className="text-center text-lg font-montserrat font-medium justify-center flex items-center gap-2 rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out button">
                  <Link to="/admin">
                    Login
                  </Link>
                </button>
              )}
         
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
                <Link to="/admin/add_blog"> Add Blogs</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/admin/Contacts_Info">Check Contact Details</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link>Logout</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

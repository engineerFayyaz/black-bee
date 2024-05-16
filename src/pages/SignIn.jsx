import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FirebaseConfig"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();
    const log = signInWithEmailAndPassword(auth,email, password).then((userCredentails) => {
      const user = userCredentails.user;

      toast.success("Welcome admin");
      if(user.email === "adminblackbee@gmail.com") {

        toast.success("Welcome admin");

        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/admin/add_blog");
        }, 1000)
      }
      else{
        toast.error("Invalid credentials");
      }
    })
    .catch((err) => {
     const errorMessage = err.message;
      console.error("error is ",errorMessage)
     toast.error("Invalid Credentials", errorMessage);
    })
  };

  return (
    <>
      <div className="container-fluid admin-login-container d-flex align-items-center justify-content-center m-0">
        <div className="content">
          <div className="text-center">
            <h1 className="text-xl font-montserrat my-3 mb-5 sign_in_title">Sign In</h1>
          </div>
          <form className="content__form d-flex flex-column gap-3 " id="login" onSubmit={handleLogin}>
            <div className="content__inputs ">
                <input
                  required
                  type="text"
                  placeholder="adminblackbee@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-100 rounded-3 border-1 p-2 my-2"
                />
                
                <input
                  required
                  type="password"
                  placeholder="admin123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-100 rounded-3 border-1 p-2 my-2"
                />
            </div>
            <button type="submit" className="text-center text-lg font-montserrat font-medium justify-center flex items-center gap-2 rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out button">
              Log In
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignIn;

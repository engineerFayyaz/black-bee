import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../FirebaseConfig"
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const db = getFirestore();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success("Signup successful");

      setName("");
      setEmail("");
      setPassword("");
      await addDoc(collection(db, "Registered_Users"), {
        user_Name: name,
        user_Email: email,
      });

      toast.success("User registered successfully");
      console.log("Registered user:", user);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(`Error while registering user: ${errorMessage}`);
      console.error("Error while registering user:", errorCode, errorMessage);
    }
  };

  return (
    <>
      <div className="container-fluid admin-login-container admin-signup-container d-flex align-items-center justify-content-center m-0">
        <div className="content">
          <div className="text-center">
           
            <h1 className="text-xl font-montserrat my-3 mb-5 sign_in_title">Create Your Account</h1>
          </div>
          <form
            className="content__form d-flex flex-column gap-3"
            onSubmit={handleRegister}
          >
            <div className="content__inputs">
              <input
                required
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-100 rounded-3 border-1 p-2 my-2"
              />
              <input
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-100 rounded-3 border-1 p-2 my-2"
              />
              <input
                required
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-100 rounded-3 border-1 p-2 my-2"
              />
            </div>
            <button
              type="submit"
              className="text-center text-lg font-montserrat font-medium justify-center flex items-center gap-2 rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out button"
            >
              Register
            </button>
          </form>
          <div className="content__or-text text-center my-2">
            <span />
            <span>OR</span>
            <span />
          </div>
          <div className="content__forgot-buttons text-center">
            <Link to="/admin">Already have an account?</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../../FirebaseConfig";
import contactImg from "../../assets/Contact/contact.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const db = getFirestore(app);

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!/^[0-9]+$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await addDoc(collection(db, "contactForms"), formData);
      setFormSubmitted(true);
      toast.success("Your request has been submitted");

      const initialFormData = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
      setFormData(initialFormData);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000); 
    } catch (error) {
      toast.error("Error while submitting your request");
      console.error("Error adding contact form data: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col gap-20">
        <div className="font-montserrat flex flex-col gap-2 justify-center items-center text-center">
          <h3 className="text-lg text-orange-500" data-aos="fade-up">
            CONNECT WITH US
          </h3>
          <p className="lg:w-96 text-wrap" data-aos="fade-up">
            Our dedicated team leverages expertise and commitment to deliver
            exceptional value and tailored solutions to our customers.
          </p>
        </div>
        <div
          className="flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center font-montserrat lg:gap-40 gap-20"
          data-aos="fade-up"
        >
          {/* Left section */}
          {formSubmitted && (
            <div className="text-green-500 text-center">
              Thank you for contacting Blackbee-Digital. We'll get back to you
              soon.
            </div>
          )}
          <form
            className="lg:w-1/2 w-full flex flex-col gap-6 text-start"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Contact No."
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black ${
                  errors.message ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className="w-40 text-center text-lg font-montserrat font-medium rounded-xl lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out"
            >
              Send
            </button>
          </form>

          {/* Right section */}
          <div className="lg:w-1/2 w-full lg:pl-20" data-aos="fade-up">
            <img
              src={contactImg}
              alt="hand holding phone"
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

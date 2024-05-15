import React from "react";
import { testimonials } from "../../utils/testimonials";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mx-auto container overflow-x-hidden mb-20">
      <div className=" w-full flex flex-col justify-center items-center mb-10">
        <h3
          className="text-lg font-outfit text-orange-500 text-center mb-4"
          data-aos="fade-up"
        >
          TESTIMONIALS
        </h3>
        <span
          className="lg:text-6xl text-2xl font-montserrat lg:py-6"
          data-aos="fade-up"
        >
          What others' say
        </span>
      </div>

      <Slider {...settings} data-aos="fade-up h-full">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

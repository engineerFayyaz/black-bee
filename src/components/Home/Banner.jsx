import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200, // Adjust delay as needed
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state

  const { ref, inView } = useInView({ threshold: 0.5 }); // Configure inView hook

  useEffect(() => {
    setIsVisible(inView); // Update visibility based on inView
  }, [inView]); // Update on inView change

  return (
    <div className="w-full" data-aos="fade-up" ref={ref}>
      <div className="w-full bg-[#002244] flex lg:flex-row flex-col lg:justify-between justify-center items-center rounded-md lg:px-20">
        <div className="flex flex-col gap-2 justify-center items-center p-10">
          <span className="lg:text-6xl text-3xl font-outfit font-semibold text-white flex">
            <Number n={isVisible ? 100 : 0} /> +
          </span>
          <span className="text-lg text-orange-500">EXPERIENCED DESIGNERS</span>
          <span className="text-sm text-white">
            {" "}
            Our company has 100 expert
          </span>
        </div>
        {/* <div className="lg:block hidden">
          <img src={divider} alt="" />
        </div> */}
        <div className="flex flex-col gap-2 justify-center items-center p-10">
          <span className="lg:text-6xl text-3xl font-outfit font-semibold text-white flex">
            <Number n={isVisible ? 250 : 0} /> +
          </span>
          <span className="text-lg text-orange-500">SATISFIED CUSTOMERS</span>
          <span className="text-sm text-white">
            {" "}
            Our company satisfied customer
          </span>
        </div>
        {/* <div className="lg:block hidden">
          <img src={divider} alt="" />
        </div> */}
        <div className="flex flex-col gap-2 justify-center items-center p-10  ">
          <span className="lg:text-6xl text-3xl font-outfit font-semibold text-white flex">
            <Number n={isVisible ? 1000 : 0} /> +
          </span>
          <span className="text-lg text-orange-500">COMPLETED CASSES</span>
          <span className="text-sm text-white">We have done 1200 Cassses</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// Install the react-intersection-observer library:
// npm install react-intersection-observer/

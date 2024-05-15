import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Custom hook for smoother staggered bottom-to-top animation with optional scroll easing
const useStaggeredBottomToTopAnimation = (
  selector,
  staggerDelay = 0.1,
  overlap = 0.3,
  smoothScroll = true // Add smooth scroll option (default: true)
) => {
  const elementsRef = useRef([]); // Array to store element references

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = Array.from(document.querySelectorAll(selector));
    elementsRef.current = elements; // Store references for later use

    if (!elements.length) {
      console.warn(
        `useStaggeredBottomToTopAnimation: No elements found with selector "${selector}"`
      );
      return; // Exit if no elements found
    }

    // Staggered animation with delay adjustment
    elements.forEach((element, index) => {
      const delay = index * staggerDelay - overlap * index;
      gsap.from(element, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none",
        },
      });
    });

    // Optional smooth scroll animation (using gsap's ScrollToPlugin)
    // if (smoothScroll) {
    //   gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered

    //   gsap.to(window, {
    //     duration: 1, // Adjust duration as needed
    //     ease: "power3.out", // Adjust easing as needed
    //     scrollTo: { y: document.body.scrollHeight, autoKill: false }, // Scroll to bottom smoothly
    //     scrollTrigger: {
    //       trigger: document.body, // Trigger on entire body
    //       start: "top top",
    //       end: "bottom bottom",
    //       scrub: true, // Scrub animation based on scroll position
    //     },
    //   });
    // }
  }, [selector, staggerDelay, overlap, smoothScroll]); // Re-run on changes

  return null; // No need to return anything from the hook
};

export default useStaggeredBottomToTopAnimation;

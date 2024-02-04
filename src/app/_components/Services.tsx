"use client";

import products from "../_lib/products";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [titleAnimation, setTitleAnimation] = useState(false);
  const [elementAnimation, setElementAnimation] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const elementRef = useRef<HTMLHeadingElement>(null);

  // Function to check if the title is in the viewport with a buffer
  const isTitleInViewport = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      // Calculate the threshold by multiplying the window's innerHeight by 0.4
      const threshold = window.innerHeight * 0.005;
      return rect.top - threshold < window.innerHeight;
    }
    return false;
  };

  const isElementInViewport = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      // Calculate the threshold by multiplying the window's innerHeight by 0.4
      const threshold = window.innerHeight * 0.5;
      return rect.top - threshold < window.innerHeight;
    }
    return false;
  };

  const handleClick = (location: string) => {
    const section = document.getElementById(location);
    if (section) {
      const offsetTop = section.offsetTop - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isTitleInViewport() && !titleAnimation) {
        setTitleAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [titleAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport() && !elementAnimation) {
        setElementAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementAnimation]);
  return (
    <div
      className="text-night px-10 xs:py-24 w-full items-center flex flex-col justify-center bg-primary"
      id="services"
    >
      <h1
        ref={titleRef}
        className={`text-3xl xs:mb-16 xl:text-4xl xl:mb-16 text-light ${
          titleAnimation ? "slide-in-title slide-in" : "slide-in-title"
        }`}
      >
        Services
      </h1>
      <div className="flex xs:flex-col xl:flex-row xl:h-fit xl:w-full xl:flex-wrap xl:justify-center xl:mb-16">
        {products.map((product) => {
          const { title, description } = product;
          return (
            <div
              key={title}
              className={`flex flex-col justify-center xl:mx-10 xs:mb-16 text-light ${
                titleAnimation ? "slide-in-title slide-in" : "slide-in-title"
              }`}
              ref={elementRef}
            >
              <h2 className="font-semibold text-xl text-left mt-3">{title}</h2>
              <p className="font-light leading-4 text-lg mt-2 text-left xl:w-96">
                {description}
              </p>
            </div>
          );
        })}
      </div>
      <button
        className="bg-light text-primary py-2 px-3 w-full h-9 text-sm leading-relaxed xl:h-12 xl:text-xl align-baseline flex justify-center xl:w-96 hover:opacity-75 transition-opacity duration-500"
        onClick={() => handleClick("contact")}
      >
        REQUEST INFO
      </button>
    </div>
  );
}

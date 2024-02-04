"use client";

import services from "../_lib/services";
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
      className="text-night px-10 xs:py-24 items-center flex flex-col justify-center"
      id="features"
    >
      <h1
        ref={titleRef}
        className={`text-3xl xl:text-4xl xl:my-16 ${
          elementAnimation ? "slide-in-title slide-in" : "slide-in-title"
        }`}
      >
        Features
      </h1>
      <div className="flex xs:flex-col xl:flex-row xl:h-fit xl:w-3/5 xl:flex-wrap xl:justify-center xl:mb-16">
        {services.map((service, index) => {
          const { title, imageUrl, description } = service;
          const even = index % 2 === 0 ? true : false;
          let slideEffectA = "slide-in-title slide-in";
          let slideEffectB = "slide-in-title";
          if (even) {
            slideEffectA = "slide-out-title slide-out";
            slideEffectB = "slide-out-title";
          }
          return (
            <div
              key={title}
              className={`flex flex-col justify-center xl:mx-10 ${
                titleAnimation ? slideEffectA : slideEffectB
              }`}
              ref={elementRef}
            >
              <div
                className="xs:w-full xs:h-20 bg-center bg-no-repeat bg-contain mt-24 flex flex-col justify-en"
                style={{
                  backgroundImage: `url(/assets/images/${imageUrl})`,
                }}
              />
              <h2 className="font-semibold text-xl text-center mt-3">
                {title}
              </h2>
              <p className="font-light leading-4 text-lg mt-2 text-center xl:w-96">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

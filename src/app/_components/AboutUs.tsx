"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const [titleAnimation, setTitleAnimation] = useState(false);
  const [elementAnimation, setElementAnimation] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const elementRef = useRef<HTMLHeadingElement>(null);

  const isTitleInViewport = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();

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

  return (
    <div
      className="xs:h-auto xs:px-10 xs:py-32 xl:flex xl:flex-col xl:items-center xs:flex xs:items-center xs:flex-col xl:w-full xl:px-28 bg-light"
      id="about_us"
    >
      <h1
        className={`text-3xl xl:text-4xl xl:my-4 text-center text-night ${
          titleAnimation ? "slide-in-title slide-in" : "slide-in-title"
        }`}
        ref={titleRef}
      >
        Meet Our Founder
      </h1>
      <div
        className={`xs:w-60 xs:h-60 bg-top bg-no-repeat bg-cover shadow-md shadow-black my-14 xs:mb-6 flex flex-col justify-end xl:mx-20 xl:w-96 xl:h-96 xl:bg-left-top ${
          titleAnimation ? "slide-out-title slide-out" : "slide-out-title"
        }`}
        style={{ backgroundImage: "url(/assets/images/profile-headshot.png)" }}
        ref={titleRef}
      />
      <div className="flex w-full justify-evenly xs:mb-6 xl:justify-center">
        <a
          href="https://github.com/LukeLarson2"
          className="text-night underline font-bold xl:mr-32 text-lg hover:opacity-50 transition-all duration-700"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-m-larson/"
          className="text-night underline font-bold text-lg hover:opacity-50 transition-all duration-700"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-night leading-5 font-normal opacity-75 xs:mb-6 xl:text-center xl:leading-6 xl:text-lg xl:mb-8">
        {`Luke Larson, the founder and CEO of Caloop Mobile LLC, brings a decade of experience from his service in the US Navy to the tech industry. Married with two children, Larson is deeply passionate about software development, encompassing both websites and mobile applications. His innovative spirit is highlighted by his filing for two patents, showcasing his commitment to creativity and ingenuity. Larson's military background has honed his problem-solving skills and attention to detail, qualities he now applies to bring his clients' ideas to life through Caloop Mobile LLC.`}
      </p>
      <button
        className="bg-primary text-light py-2 px-3 mt-6 w-full h-9 leading-relaxed text-sm xl:h-12 xl:text-xl align-middle xl:w-96 hover:opacity-75 transition-opacity duration-500"
        onClick={() => handleClick("contact")}
      >
        BOOK AN APPOINTMENT
      </button>
    </div>
  );
}

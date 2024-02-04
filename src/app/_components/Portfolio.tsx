"use client";

import ProjectCard from "./ProjectCard";
import projects from "../_lib/projects";
import React, { useState, useEffect, useRef } from "react";

interface PortfolioProps {
  handlePreview: (value: boolean) => void;
  showModal: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ handlePreview, showModal }) => {
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
      className="flex flex-col items-center bg-primary h-fit w-screen xs:px-10 xs:py-24 xl:px-28"
      id="portfolio"
    >
      <h1
        ref={titleRef}
        className={`text-3xl xs:mb-8 xl:text-4xl xl:my-16 ${
          titleAnimation ? "slide-in-title slide-in" : "slide-in-title"
        }`}
      >
        Portfolio Projects
      </h1>
      {!showModal && (
        <div className="flex xs:flex-col xl:flex-row xl:h-fit xl:w-5/6 xl:flex-wrap xl:justify-center">
          {projects.map((project, index) => {
            const { title, imageUrl, description, url } = project;
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
                className={titleAnimation ? slideEffectA : slideEffectB}
                ref={elementRef}
              >
                <ProjectCard
                  title={title}
                  imageUrl={imageUrl}
                  description={description}
                  url={url}
                  handlePreview={handlePreview}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Portfolio;

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
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Function to check if the title is in the viewport with a buffer
  const isElementInViewport = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      // Calculate the threshold by multiplying the window's innerHeight by 0.4
      const threshold = window.innerHeight * 0.01;
      return rect.top - threshold < window.innerHeight;
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport() && !titleAnimation) {
        setTitleAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [titleAnimation]);

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
          {projects.map((project) => {
            const { title, imageUrl, description, url } = project;
            return (
              <React.Fragment key={title}>
                <ProjectCard
                  title={title}
                  imageUrl={imageUrl}
                  description={description}
                  url={url}
                  handlePreview={handlePreview}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Portfolio;

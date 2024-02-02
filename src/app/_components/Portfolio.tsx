"use client";

import ProjectCard from "./ProjectCard";
import projects from "../_lib/projects";
import React from "react";

interface PortfolioProps {
  handlePreview: (value: boolean) => void;
  showModal: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ handlePreview, showModal }) => {
  return (
    <div
      className="flex flex-col items-center bg-primary h-fit w-screen xs:px-10 xs:py-24 xl:px-28"
      id="portfolio"
    >
      <h1 className="text-3xl xs:mb-8 xl:text-4xl xl:my-16">
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

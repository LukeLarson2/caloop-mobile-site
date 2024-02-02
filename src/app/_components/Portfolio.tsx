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
      className="flex flex-col items-center bg-primary h-fit w-screen xs:px-10 xs:py-24"
      id="portfolio"
    >
      <h1 className="text-3xl xs:mb-8">Portfolio Projects</h1>
      {!showModal && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Portfolio;

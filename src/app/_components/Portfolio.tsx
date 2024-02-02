"use client";

import ProjectCard from "./ProjectCard";
import projects from "../_lib/projects";
import React from "react";

export default function Portfolio({
  handlePreview,
  showModal,
}: {
  handlePreview: (value: boolean) => void;
  showModal: boolean;
}) {
  return (
    <div className="flex flex-col items-center bg-primary h-fit w-screen xs:px-10 xs:py-24">
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
}

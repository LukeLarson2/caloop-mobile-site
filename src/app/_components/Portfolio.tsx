"use client";

import ProjectCard from "./ProjectCard";
import projects from "../_lib/projects";
import { useState } from "react";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center bg-primary h-fit w-screen xs:px-10 xs:py-24">
      <h1 className="text-3xl xs:mb-8">Portfolio Projects</h1>
      {projects.map((project) => {
        const { title, imageUrl, description } = project;
        return (
          <>
            <ProjectCard
              title={title}
              imageUrl={imageUrl}
              description={description}
            />
          </>
        );
      })}
    </div>
  );
}

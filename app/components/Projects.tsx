"use client";

// components
import ProjectCard from "./ProjectCard";

// data
import { projects } from "../data/projects";

export default function Projects() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div
      id="projects"
      className="w-full flex flex-col items-start gap-4 opacity-0"
    >
      <div className="text-lg md:text-xl font-bold">
        <span className="text-primary">struct</span>
        {" project projects[]"}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {sortedProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </div>
  );
}

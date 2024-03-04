import React from "react";
import Project from "./Project";
import projectData from "../data/projects.json";

function ProjectGallery() {
  return (
    <div className="row">
      {projectData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectGallery;

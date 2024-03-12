import React from "react";
import NavbarComp from "./NavbarComp";
import projectData from "../data/projects.json";
import { useParams } from "react-router-dom";
import "../components/SingleProject.css";

function SingleProject() {
  const { projectId } = useParams();

  const project = projectData.find((p) => p.id === parseInt(projectId));

  // If project isnt found, displays line 14
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mt-4">
      <NavbarComp />
      <div className="p-5 card d-flex flex-column align-items-center ">
        <h2>{project.title}</h2>
        <button
          className="btn btn-primary m-1"
          href={project.deployedLink}
          onClick={() => window.open(project.deployedLink, "_blank")}
        >
          Deployed Link
        </button>
        <button
          className="btn btn-primary m-1"
          href={project.githubLink}
          onClick={() => window.open(project.githubLink, "_blank")}
        >
          Github Link
        </button>
        <img
          src={`${process.env.PUBLIC_URL}/${project.screenshot}`}
          alt={project.title}
          className="img-fluid image"
        />
      </div>
    </div>
  );
}

export default SingleProject;

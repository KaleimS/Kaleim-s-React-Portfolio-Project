import React from "react";
import NavbarComp from "./NavbarComp";
import projectData from "../data/projects.json";
import { Link } from "react-router-dom";

function Project({ id, title, deployedLink, githubLink, screenshot }) {
  return (
    <div className="m-5">
      <NavbarComp />
      <div className="py-5 card-container">
        <div className="row py-5">
          {projectData.map((projects) => {
            return (
              <div className="col-lg-4 mb-4" key={projects.id}>
                <div className="card rounded-5">
                  <div className="card-body">
                    <h3 className="card-title">{projects.title}</h3>
                    <h5 className="py-5">{projects.skills}</h5>
                    <Link to={`/projects/${projects.id}`}>
                      <div className="btn btn-primary">View Project</div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;

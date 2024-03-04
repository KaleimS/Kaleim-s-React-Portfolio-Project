import React from "react";
import NavbarComp from "./NavbarComp";

function Project({ id, title, deployedLink, githubLink, screenshot }) {
  return (
    <div>
      <NavbarComp />
      <h1 className="mt-4">Project Gallery</h1>
      <p className="mt-3">Your brand statement goes here.</p>
    </div>
  );
}

export default Project;

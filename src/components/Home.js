import React from "react";
import NavbarComp from "./NavbarComp";


function Home() {
  return (
    <div>
      <NavbarComp />
      <h1 className="mt-4">Your Name</h1>
      <p className="mt-3">Your brand statement goes here.</p>
    </div>
  );
}

export default Home;

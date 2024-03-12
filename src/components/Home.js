import React from "react";
import NavbarComp from "./NavbarComp";
import "./Home.css";
import portrait from "../img/kaleim-rounded.PNG";
import cvFile from "../cv/Kaleim-Saunders-CV.pdf";

function Home() {
  return (
    <div>
      <NavbarComp />
      <section class="Home py-4">
        <div className="container-lg">
          <div className="row min-vh-100 align-items-center align-content-center">
            <div className="col-md-6">
              <div className="portrait-img text-center">
                <img
                  src={portrait}
                  style={{ maxWidth: "100%", height: "auto", width: "400px" }}
                  className="rounded-circle img-fluid border border-black border-3"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-text">
                <p>Hello I'm</p>
                <h1 className="text-primary text-uppercase fw-bold fs-1">
                  Kaleim Saunders
                </h1>
                <h2 className="fs-4 py-2">Frontend Web Developer</h2>
                <p className="fs-5">
                  I am passionate about expanding my knowledge as a front-end
                  web developer. Join me on my journey!
                </p>
                <a
                  className="btn btn-primary text-black cv"
                  href={cvFile}
                  download="Kaleim-Saunders-CV.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

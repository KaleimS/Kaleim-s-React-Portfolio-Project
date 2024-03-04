import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./NavbarComp.css";

function NavbarComp() {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-tertiary fs-4">
        <Navbar.Brand
          as={Link}
          to="/"
          className="ps-3 d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Logo"
            width="70"
            height="70"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pe-5 nav-underline">
            <Link to="/" className="nav-link ">
              Home
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center pe-3">
            <Link
              to="https://github.com/KaleimS"
              target="_blank"
              className="nav-link me-4"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kaleim-saunders-b648b82a0/"
              target="_blank"
              className="nav-link me-4"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;

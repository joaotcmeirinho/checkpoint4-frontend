import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BiHome } from "react-icons/bi";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <div>
      <Navbar
        className="navbar"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand href={"/"} style={{ marginLeft: "15px" }}>
          {<BiHome />}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="ms-auto"
            style={{ marginRight: "50px", fontFamily: "MedievalSharp" }}
          >
            <Nav.Link style={{ margin: " 0 10px" }} href={"/members"}>
              Royal Family
            </Nav.Link>
            <Nav.Link style={{ margin: " 0 10px" }} href={"/assets"}>
              Royal Assets
            </Nav.Link>
            <Nav.Link style={{ margin: " 0 10px" }} href={"/schedule"}>
              Schedule a visit
            </Nav.Link>
            <Nav.Link style={{ margin: " 0 10px" }} href={"/contact"}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

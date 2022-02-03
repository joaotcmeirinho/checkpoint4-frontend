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
          <Nav className="ms-auto" style={{ marginRight: "50px" }}>
            <Nav.Link href={"/members"}>Royal Family</Nav.Link>
            <Nav.Link href={"/assets"}>Royal Assets</Nav.Link>
            <Nav.Link href={"/schedule"}>Schedule a visit</Nav.Link>
            <Nav.Link href={"/contact"}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

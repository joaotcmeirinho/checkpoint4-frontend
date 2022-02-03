import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand href={"/"}>Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
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

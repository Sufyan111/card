import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PickupBiz</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Courses">Courses</NavLink>
            <NavLink to="/AboutUs">About Us</NavLink>
            <NavLink to="/ContactUs">Contact Us</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Login">Log In</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

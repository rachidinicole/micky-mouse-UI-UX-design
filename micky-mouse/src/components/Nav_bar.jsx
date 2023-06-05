
import React from "react";
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';



function Nav_bar() {
    return (
        <Navbar expand="lg" light bg="light" >
        <Navbar.Brand href="#">Workouts</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav" className="justify-content-end" style={{ width: "100%" }}>
          <Navbar.Nav>
            <Nav.ItemLink href="#" active>Events</Nav.ItemLink>
            <Nav.ItemLink href="#">Dumbells</Nav.ItemLink>
            <Nav.ItemLink href="#">Bars</Nav.ItemLink>
            <Nav.ItemLink href="#">Weights
            </Nav.ItemLink>

          </Navbar.Nav>
        </Collapse>
      </Navbar>
    );
  }
  
  export default Nav_bar;
  
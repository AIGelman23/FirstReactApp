import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

// The navbar header uses a fixed top property as to not push page content down

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar expand="lg" fixed="top">
          <Navbar.Brand className="brand">Ariel Gelman</Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-expanded="false"
            aria-controls="myNavbar"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Tutorials</Nav.Link>
              <Nav.Link href="#link">Multimedia</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller, Button } from 'react-scroll'

class NavBar extends Component {
  scrollToElem(elemName) {
    scroller.scrollTo(elemName, {
      offset: -60
    })
  }

  render() {
    return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Brand href="/">Your Brand Name</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => this.scrollToElem('home')} >Home</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('services')} >Services</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('about')} >About</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('reviews')} >Reviews</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('contact')} >Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
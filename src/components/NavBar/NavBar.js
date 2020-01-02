import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller, Button } from 'react-scroll'

class NavBar extends Component {
  scrollToElem(elemName) {
    scroller.scrollTo(elemName, {
      delay: 300,
      smooth: true,
      offset: -50
    })
  }
  scrollToTop() {
    scroll.scrollToTop({
      delay: 300
    })
  }

  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => this.scrollToTop()} >HOME</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('services')} >SERVICES</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('about')} >ABOUT</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('reviews')} >REVIEWS</Nav.Link>
          <Nav.Link onClick={() => this.scrollToElem('contact')} >CONTACT</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
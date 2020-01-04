import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller, Button } from 'react-scroll'

import logo from '../../assets/logo.png'
import './NavBar.scss'

class NavBar extends Component {
  scrollToElem(elemName) {
    scroller.scrollTo(elemName, {
      delay: 300,
      smooth: true,
      offset: -85
    })
  }
  scrollToTop() {
    scroll.scrollToTop({
      delay: 300
    })
  }

  render() {
    return (
      <Navbar className="nav-bar justify-content-between" fixed="top" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          />{' '}
          <span className="logo-text">HANDY<br />SOLUTIONS</span>
        </Navbar.Brand>
        <Nav className="justify-content-end" id="nav-menu">
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
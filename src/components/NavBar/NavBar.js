import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { animateScroll as scroll, scroller } from 'react-scroll'

import logo from '../../assets/logo.png'
import './NavBar.scss'

class NavBar extends Component {

  state = {
    navExpanded: false
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }

  scrollToElem(elemName) {
    this.closeNav();
    scroller.scrollTo(elemName, {
      delay: 300,
      smooth: true,
      offset: -85
    })
  }

  scrollToTop() {
    this.closeNav();
    scroll.scrollToTop({
      delay: 300
    })
  }

  render() {
    return (
      <Navbar onToggle={(expanded) => this.setNavExpanded(expanded)}
              expanded={this.state.navExpanded}
              className="nav-bar" fixed="top" variant="dark" expand="lg">
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav id="nav-menu">
            <Nav.Link onClick={() => this.scrollToTop()} >HOME</Nav.Link>
            <Nav.Link onClick={() => this.scrollToElem('services')} >SERVICES</Nav.Link>
            <Nav.Link onClick={() => this.scrollToElem('about')} >ABOUT</Nav.Link>
            <Nav.Link onClick={() => this.scrollToElem('reviews')} >REVIEWS</Nav.Link>
            <Nav.Link onClick={() => this.scrollToElem('contact')} >CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
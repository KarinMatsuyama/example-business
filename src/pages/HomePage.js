import React, { Component } from 'react';

import fb from '../assets/fb.svg';
import insta from '../assets/insta.png';
import yelp from '../assets/yelp.svg';
import Services from './Services';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import './HomePage.css'

class HomePage extends Component {
  socialMedia() {
    return (
      <div className="social-logo">
        <a href="https://www.facebook.com" target="_blank"><img className="fb-logo" src={fb} /></a>
        <a href="https://www.instagram.com" target="_blank"><img className="insta-logo" src={insta} /></a>
        <a href="https://www.yelp.com" target="_blank"><img className="yelp-logo" src={yelp} /></a>
      </div>
    )
  }

  render() {
    return (
      <div name="home">
        <div id="home" >
          <h1>HANDY<br />SOLUTIONS</h1>
          {this.socialMedia()}
        </div>
        <Services name='services'/>
        <AboutUs name='about'/>
        <Reviews name='reviews'/>
        <ContactUs name='contact'/>
      </div>
    )
  }
}

export default HomePage;

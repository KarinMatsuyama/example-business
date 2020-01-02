import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import homeImage from '../assets/light-bulbs.jpg';
import fb from '../assets/fb.svg';
import insta from '../assets/insta.png';
import yelp from '../assets/yelp.svg';
import Services from './Services';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import './HomePage.css'

class HomePage extends Component {
  ParallaxHomeImage() {
    return (
    <Parallax className="home-page" tagOuter="figure">
        <img className="home-img" src={homeImage} />
        <h1 className="company-name" name="home">Company Name</h1>
        <div className="social-logo">
          <a href="https://www.facebook.com" target="_blank"><img className="fb-logo" src={fb} /></a>
          <a href="https://www.instagram.com" target="_blank"><img className="insta-logo" src={insta} /></a>
          <a href="https://www.yelp.com" target="_blank"><img className="yelp-logo" src={yelp} /></a>
        </div>
    </Parallax>
    )
  }

  render() {
    return (
      <div>
        {this.ParallaxHomeImage()}
        <Services name='services'/>
        <AboutUs name='about'/>
        <Reviews name='reviews'/>
        <ContactUs name='contact'/>
      </div>
    )
  }
}

export default HomePage;

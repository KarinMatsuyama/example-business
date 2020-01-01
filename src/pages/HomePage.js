import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import homeImage from '../assets/light-bulbs.jpg';
import Services from './Services';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import './HomePage.css'

class HomePage extends Component {
  ParallaxHomeImage() {
    return (
    <Parallax className="custom-class" tagOuter="figure">
        <img className="home-img" src={homeImage} />
        <h1 className="company-name" name="home">Company Name</h1>
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

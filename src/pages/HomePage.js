import React, { Component } from 'react';
import Services from './Services';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import ContactUs from './ContactUs';

class HomePage extends Component {
  render() {
    return (
      <div >
        <h1 name='home'>Sims & Sons Electrical and Plumbing</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Services name='services'/>
        <AboutUs name='about'/>
        <Reviews name='reviews' />
        <ContactUs name='contact'/>
      </div>
    )
  }
}

export default HomePage;

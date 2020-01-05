import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './AboutUs.scss'

class AboutUs extends Component {
  state = {
    photos: ['frank.jpg', 'duffy.jpg', 'john.jpg'],
    description: [
      "This is Frank. He has been in this industry for over 50 years. He has seen it all. He's an awesome at construction.",
      "This is Duffy. He has been in this industry for over 30 years. He has seen it all. He's an awesome at Eletrical work.",
      "This is John. He has been in this industry for over 40 years. He has seen it all. He's an awesome at Carpentry."
    ]
  }

  render() {
    return (
      <div id="about">
        <h2>ABOUT US</h2>
        { this.state.photos.map((photo, index) => {
            return (
              <Card id='photo-card' key={index} >
                <Card.Img className="image" variant="top" src={require(`../assets/images/${photo}`)} alt="photo of a person" />
                <p class="img-description">{this.state.description[index]}</p>
              </Card>
            )
        })}
      </div>
    );
  }
}
export default AboutUs;

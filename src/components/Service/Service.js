import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './Service.css'

class Service extends Component {

  render() {
    return (
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={require(`../../assets/${this.props.img}`)} />
        <Card.Body>
          <Card.Title id="card-title">{this.props.title}</Card.Title>
          <Card.Text id="card-text">
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Service;

import React, { Component } from 'react';
import { Container, CardDeck } from 'react-bootstrap';

import Service from '../components/Service/Service';
import './Services.css'

class Services extends Component {

  render() {
    const services = [
      {
        img: 'handy-icon.svg',
        title: 'HANDY WORK',
        description: 'Cabinets and Tiling Refinish/Install'
      },
      {
        img: 'plumbing-icon.svg',
        title: 'PLUMBING',
        description: 'Faucets, Fixtures and Pipe Repair'
      },
      {
        img: 'paint-icon.svg',
        title: 'PAINTING',
        description: 'Paint Wall and Ceilings'
      }
    ];

    return (
      <div id="services" className="services">
        <h2>Services</h2>
        <CardDeck className="mx-auto cards">
        {services.map(service => <Service img={service.img} title={service.title} description={service.description} />)}
        </CardDeck>
      </div>
    );
  }
}
export default Services;

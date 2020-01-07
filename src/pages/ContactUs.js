import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';

import ExternalAPI from '../api/ExternalAPI.js';
import ContactEmailForm from '../components/ContactEmailForm/ContactEmailForm'
import BusinessDetails from '../components/BusinessDetails/BusinessDetails'
import './ContactUs.css'

class ContactUs extends Component {
  state = {
    phone: '',
    messaging_url: '',
  }

  componentDidMount() {
    ExternalAPI.fetchYelpBusinessInformation()
      .then((business) => {
        this.setState({
          phone: business.display_phone,
          messaging_url: business.messaging.url
        })
      })
    }

  render() {
    return (
      <div id="contact">
        <h2>CONTACT</h2>
        <Row>
          <Col className="container">
          <ContactEmailForm />
          </Col>
          <Col className="container">
          <BusinessDetails />
          </Col>
        </Row>
      </div>
    );
  }
}
export default ContactUs;

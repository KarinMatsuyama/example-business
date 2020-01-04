import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import ExternalAPI from '../api/ExternalAPI.js';
import ContactEmailForm from '../components/ContactEmailForm/ContactEmailForm'
import BusinessDetails from '../components/BusinessDetails/BusinessDetails'

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
        <BusinessDetails />
        <Button>Get a quote!</Button>
        <ContactEmailForm />
      </div>
    );
  }
}
export default ContactUs;

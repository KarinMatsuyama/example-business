import React, { Component } from 'react';
import ExternalAPI from '../api/ExternalAPI.js';
import { Button } from 'react-bootstrap';


class ContactUs extends Component {
  state = {
    phone: '',
    messaging_url: ''
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
        <p>Phone Number: XXXXXXXX</p>
        <Button>Get a quote!</Button>
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
      </div>
    );
  }
}
export default ContactUs;

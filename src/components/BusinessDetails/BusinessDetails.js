import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './BusinessDetails.css'

class BusinessDetails extends Component {
  render() {
    return (
      <div>
        <h3>Find Us</h3>
        <Row>
          <Col>
            <p id="address">1234 N. Handy Ave.<br />
            Chicago, IL 60603</p>
          </Col>
          <Col>
            <p id="info">TEL: 123-456-7890<br />
            info@handysolutions.com</p>
          </Col>
        </Row>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=chicago%20il&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
      </div>
    );
  }
}
export default BusinessDetails;

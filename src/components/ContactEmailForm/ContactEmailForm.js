import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import './ContactEmailForm.scss'

class ContactUs extends Component {
  state = {
    subject: '',
    body: ''
  }

  setEmailSubject = (e) => {
    this.setState({ subject: e.target.value })
  }

  setEmailBody = (e) => {
    this.setState({ body: e.target.value })
  }

  render() {
    return (
      <div>
        <h3>Inquiries</h3>
        <p id="inquiry">For any inquiries or questions, please call: 123-456-7890<br />or send us an email from below</p>
        <Form id="inquiry">
        <Form.Group controlId="emailSubject" onChange={ this.setEmailSubject }>
            <Form.Label>Email Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="emailBody" onChange={ this.setEmailBody }>
            <Form.Label>Email Body</Form.Label>
            <Form.Control as="textarea" rows="8" placeholder="Message" />
          </Form.Group>
          <a href={`mailto:support@example.com?subject=${ this.state.subject }&body=${ this.state.body }`} title="support@example.com">
            <Button className="send-btn">Send Email</Button>
          </a>
        </Form>
      </div>
    );
  }
}
export default ContactUs;

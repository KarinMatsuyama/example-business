import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';

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
      <div className='container'>
        <Form>
        <Form.Group controlId="emailSubject" onChange={ this.setEmailSubject }>
            <Form.Label>Email Subject</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="emailBody" onChange={ this.setEmailBody }>
            <Form.Label>Email Body</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <a href={`mailto:support@example.com?subject=${ this.state.subject }&body=${ this.state.body }`} title="support@example.com">
            <Button>Send Email</Button>
          </a>
        </Form>
      </div>
    );
  }
}
export default ContactUs;

import React, { Component } from 'react';

class BusinessDetails extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Contact Us!</h2>
        <p>Phone Number: XXXXXXXX</p>
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

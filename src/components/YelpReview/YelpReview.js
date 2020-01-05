import React, { Component } from 'react';
import './YelpReview'

class YelpReview extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://www.yelp.com/embed/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="carousel-item">
        <span id='yelp-review' className="yelp-review" data-review-id={this.props.review.id} data-hostname="www.yelp.com">
          Read
          <a href={`https://www.yelp.com/user_details?userid=${this.props.review.user.id}`} rel="nofollow noopener"> {this.props.review.user.name}</a>'s
          <a href={`https://www.yelp.com/biz/sims-and-sons-electric-and-plumbing-chicago?hrid=${this.props.review.id}`} rel="nofollow noopener"> review</a> of
          <a href="https://www.yelp.com/biz/gdDHPx4Bicz_mcOGVw2sgg" rel="nofollow noopener"> Sims and Sons Electric and Plumbing </a> on
          <a href="https://www.yelp.com" rel="nofollow noopener"> Yelp</a>
        </span>
      </div>
    );
  }
}

export default YelpReview;

import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import YelpReview from '../YelpReview/YelpReview';
import './ReviewsList.css';

class ReviewsList extends Component {
  render() {
    return (
      <div className='reviews-container'>
        <Carousel>
          { this.props.yelpReviews.map((review, index) => {
            return <Carousel.Item><YelpReview key={index} review={review} /></Carousel.Item>
          })}
        </Carousel>
      </div>
    )
  }
}

export default ReviewsList;

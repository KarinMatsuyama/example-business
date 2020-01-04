import React, { Component } from 'react';
import YelpReview from '../YelpReview/YelpReview';
import './ReviewsList.css';

import { Carousel } from 'react-bootstrap';

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

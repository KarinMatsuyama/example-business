import React, { Component } from 'react';
import YelpReview from '../YelpReview/YelpReview';
import './ReviewsList.css';

class ReviewsList extends Component {
  render() {
    return (
      <div className='reviews-container'>
        <div className='reviews-list'>
          { this.props.yelpReviews.map((review, index) => {
            return <YelpReview key={index} review={review} />
          })}
        </div>
      </div>
    )
  }
}

export default ReviewsList;

import React, { Component } from 'react';
import YelpReview from '../YelpReview/YelpReview'

class ReviewsList extends Component {
  render() {
    return (
      <div>
        { this.props.yelpReviews.map((review, index) => {
          return <YelpReview key={index} review={review} />
        })}
      </div>
    )
  }
}

export default ReviewsList;

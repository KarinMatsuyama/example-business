import React, { Component } from 'react';
import ReviewsList from '../components/ReviewList/ReviewsList';
import ExternalAPI from '../api/ExternalAPI.js';

class Reviews extends Component {
  state = { yelpReviews: [] }

  componentDidMount() {
    ExternalAPI.fetchYelpReviews()
      .then((apiResponseJSON) => {
        this.setState({
          yelpReviews: apiResponseJSON.reviews
        })
      })
    }

  render() {
    return (
      <div id='reviews'>
        <h2>Reviews</h2>
        { this.state.yelpReviews && <ReviewsList yelpReviews={ this.state.yelpReviews } /> }
      </div>
    );
  }
}
export default Reviews;

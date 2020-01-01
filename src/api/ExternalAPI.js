const fetchYelpReviews = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/gdDHPx4Bicz_mcOGVw2sgg/reviews', {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_YELP_TOKEN}`
    },
  })
  .then((response) => response.json());
}

export default {
  fetchYelpReviews: fetchYelpReviews
}

import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <div>
      <p>
        {rating.rate} ({rating.count})
      </p>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number,
  }),
};

export default Rating;

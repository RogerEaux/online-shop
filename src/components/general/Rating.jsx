import fullStar from '../../assets/svg/full-star.svg';
import halfStar from '../../assets/svg/half-star.svg';
import emptyStar from '../../assets/svg/empty-star.svg';
import PropTypes from 'prop-types';
import styles from '../../styles/general/Rating.module.css';

function Rating({ rating }) {
  let full = Math.floor(rating.rate);
  let half = rating.rate - Math.floor(rating.rate) >= 0.5 ? true : false;
  const stars = [];

  for (let i = 0; i < 5; i += 1) {
    if (full) {
      stars.push('full');
      full -= 1;
    } else if (half) {
      stars.push('half');
      half = false;
    } else {
      stars.push('empty');
    }
  }

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        {stars.map((star, index) => {
          return star === 'full' ? (
            <img key={index} src={fullStar} alt="" />
          ) : star === 'half' ? (
            <img key={index} src={halfStar} alt="" />
          ) : (
            <img key={index} src={emptyStar} alt="" />
          );
        })}
      </div>
      <p aria-label="rating">
        {rating.rate} <span>({rating.count})</span>
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

import PropTypes from 'prop-types';
import Rating from '../general/Rating';
import styles from '../../styles/shop/ItemCard.module.css';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  return (
    <Link to={'/'} className={styles.item} aria-label={item.title}>
      <img src={item.image} alt="item image" />
      <h2 aria-label="title">{item.title}</h2>
      <Rating rating={item.rating} />
      <p aria-label="price">${item.price}</p>
    </Link>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};

export default ItemCard;

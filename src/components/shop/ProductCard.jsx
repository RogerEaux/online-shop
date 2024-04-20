import PropTypes from 'prop-types';
import Rating from '../general/Rating';
import styles from '../../styles/shop/ProductCard.module.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={'/'} className={styles.product}>
      <img src={product.image} alt="product image" />
      <h2 aria-label="title">{product.title}</h2>
      <Rating rating={product.rating} />
      <p>${product.price}</p>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};

export default ProductCard;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import deleteImage from '../../assets/svg/delete.svg';
import styles from '../../styles/general/CartItem.module.css';

function CartItem({ item, toggleCart, deleteItem, plusItem, minusItem }) {
  return (
    <div data-id={item.id} className={styles.item}>
      <button onClick={deleteItem}>
        <img src={deleteImage} alt="delete" />
      </button>
      <Link to={`/product/${item.id}`} onClick={toggleCart}>
        <img src={item.image} alt="item image" />
      </Link>
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      <div className={styles.quantity}>
        <button aria-label="minus" onClick={minusItem}>
          −
        </button>
        <p aria-label="quantity">{item.quantity}</p>
        <button aria-label="plus" onClick={plusItem}>
          +
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }),
  toggleCart: PropTypes.func,
  deleteItem: PropTypes.func,
  plusItem: PropTypes.func,
  minusItem: PropTypes.func,
};

export default CartItem;

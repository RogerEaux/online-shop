import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import deleteImage from '../../assets/svg/delete.svg';

function CartItem({ item, deleteItem, plusItem, minusItem }) {
  return (
    <div>
      <button onClick={deleteItem}>
        <img src={deleteImage} alt="delete" />
      </button>
      <Link to={item.id}>
        <img src={item.image} alt="item image" />
      </Link>
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      <div>
        <button aria-label="plus" onClick={plusItem}>
          +
        </button>

        <button aria-label="minus" onClick={minusItem}>
          -
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
  }),
  deleteItem: PropTypes.func,
  plusItem: PropTypes.func,
  minusItem: PropTypes.func,
};

export default CartItem;

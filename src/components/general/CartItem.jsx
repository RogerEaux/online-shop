import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CartItem({ item }) {
  return (
    <div>
      <Link to={item.id}>
        <img src={item.image} alt="item image" />
      </Link>
      <h2>{item.title}</h2>
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
};

export default CartItem;

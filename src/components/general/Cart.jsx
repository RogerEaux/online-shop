import ProtpTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../App';

function Cart({ closeCart }) {
  const cartItems = useContext(CartContext);

  return (
    <aside>
      <h1>Shopping Cart</h1>
      <button onClick={closeCart} aria-label="Close">
        X
      </button>
      {cartItems.length ? null : <p>Go add some items to your cart!</p>}
    </aside>
  );
}

export default Cart;

Cart.propTypes = {
  closeCart: ProtpTypes.func,
};

import ProtpTypes from 'prop-types';

function Cart({ closeCart }) {
  return (
    <aside>
      <h1>Shopping Cart</h1>
      <button onClick={closeCart} aria-label="Close">
        X
      </button>
    </aside>
  );
}

export default Cart;

Cart.propTypes = {
  closeCart: ProtpTypes.func,
};

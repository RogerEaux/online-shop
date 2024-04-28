import ProtpTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../App';
import CartItem from './CartItem';

function Cart() {
  const { cartItems, deleteItem, plusItem, minusItem } =
    useContext(CartContext);

  return (
    <aside>
      <h1>Shopping Cart</h1>
      <button aria-label="Close">X</button>
      {cartItems.length ? (
        <>
          <section>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  deleteItem={deleteItem}
                  plusItem={plusItem}
                  minusItem={minusItem}
                />
              );
            })}
          </section>
          <p>
            Subtotal: ${cartItems.reduce((acc, curr) => acc + curr.price, 0)}
          </p>
          <button>Checkout</button>
        </>
      ) : (
        <p>Go add some items to your cart!</p>
      )}
    </aside>
  );
}

export default Cart;

Cart.propTypes = {
  closeCart: ProtpTypes.func,
};

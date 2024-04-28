import ProtpTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../App';
import CartItem from './CartItem';
import styles from '../../styles/general/Cart.module.css';

function Cart() {
  const {
    isCartActive,
    toggleCart,
    cartItems,
    deleteItem,
    plusItem,
    minusItem,
  } = useContext(CartContext);

  return (
    <div className={`${styles.modal} ${isCartActive ? styles.show : ''}`}>
      <aside className={styles.cart}>
        <h1>Shopping Cart</h1>
        <button onClick={toggleCart} aria-label="Close">
          X
        </button>
        {cartItems.length ? (
          <div className={styles.items}>
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
          </div>
        ) : (
          <p className={styles.noItems}>Go add some items to your cart!</p>
        )}
      </aside>
    </div>
  );
}

export default Cart;

Cart.propTypes = {
  closeCart: ProtpTypes.func,
};

import ProtpTypes from 'prop-types';
import { useContext, useRef } from 'react';
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
  const modal = useRef(null);

  function handleCloseModal(e) {
    if (e.target === modal.current) {
      toggleCart();
    }
  }

  return (
    <div
      onClick={handleCloseModal}
      ref={modal}
      className={`${styles.modal} ${isCartActive ? styles.show : ''}`}
    >
      <aside className={styles.cart}>
        <h1>Shopping Cart</h1>
        <button onClick={toggleCart} aria-label="Close">
          X
        </button>
        {cartItems.length ? (
          <>
            <section className={styles.items}>
              {cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    toggleCart={toggleCart}
                    deleteItem={deleteItem}
                    plusItem={plusItem}
                    minusItem={minusItem}
                  />
                );
              })}
            </section>
            <p>
              Subtotal: $
              {cartItems.reduce(
                (acc, curr) => acc + curr.price * curr.quantity,
                0,
              )}
            </p>
            <button>Checkout</button>
          </>
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

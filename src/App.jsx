import { createContext, useReducer, useState } from 'react';
import { Outlet } from 'react-router-dom';
import cartItemsReducer from './utils/cartItemsReducer';

const CartContext = createContext({
  isCartActive: null,
  setIsCartActive: () => {},
  cartItems: [],
  deleteItem: () => {},
  plusItem: () => {},
  minusItem: () => {},
});

function App() {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, []);
  const [isCartActive, setIsCartActive] = useState(false);

  function addItem(item) {
    dispatch({
      type: 'add_item',
      item: item,
    });
  }

  function deleteItem(e) {
    dispatch({
      type: 'delete_item',
      targetId: parseInt(e.currentTarget.parentElement.dataset.id),
    });
  }

  function plusItem(e) {
    dispatch({
      type: 'plus_item',
      targetId: parseInt(e.target.parentElement.parentElement.dataset.id),
    });
  }

  function minusItem(e) {
    dispatch({
      type: 'minus_item',
      targetId: parseInt(e.target.parentElement.parentElement.dataset.id),
    });
  }

  function toggleCart() {
    if (isCartActive) {
      setIsCartActive(false);
    } else {
      setIsCartActive(true);
    }
  }

  return (
    <CartContext.Provider
      value={{
        isCartActive,
        toggleCart,
        cartItems,
        addItem,
        deleteItem,
        plusItem,
        minusItem,
      }}
    >
      <Outlet />
    </CartContext.Provider>
  );
}

export { App, CartContext };

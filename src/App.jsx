import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

const CartContext = createContext({
  isCartActive: null,
  setIsCartActive: () => {},
  cartItems: [],
  deleteItem: () => {},
  plusItem: () => {},
  minusItem: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);

  function deleteItem(e) {
    const targetId = parseInt(e.currentTarget.parentElement.dataset.id);
    const newCartItems = cartItems.filter((item) => item.id !== targetId);

    setCartItems(newCartItems);
  }

  function plusItem(e) {
    const targetId = parseInt(
      e.currentTarget.parentElement.parentElement.dataset.id,
    );
    const targetItem = cartItems.find((item) => item.id === targetId);
    const newCartItems = cartItems.filter((item) => item.id !== targetId);
    const newItem = { ...targetItem, quantity: targetItem.quantity + 1 };

    setCartItems([...newCartItems, newItem]);
  }

  function minusItem(e) {
    const targetId = parseInt(
      e.currentTarget.parentElement.parentElement.dataset.id,
    );
    const targetItem = cartItems.find((item) => item.id === targetId);
    const newCartItems = cartItems.filter((item) => item.id !== targetId);
    if (targetItem.quantity === 1) {
      setCartItems(newCartItems);
    } else {
      const newItem = { ...targetItem, quantity: targetItem.quantity - 1 };
      setCartItems([...newCartItems, newItem]);
    }
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

import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

const CartContext = createContext({
  cartItems: [],
  deleteItem: () => {},
  plusItem: () => {},
  minusItem: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <CartContext.Provider
      value={{ cartItems, deleteItem, plusItem, minusItem }}
    >
      <Outlet />
    </CartContext.Provider>
  );
}

export { App, CartContext };

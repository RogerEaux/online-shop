import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

const CartContext = createContext({
  cartItems: [],
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={cartItems}>
      <Outlet />
    </CartContext.Provider>
  );
}

export { App, CartContext };

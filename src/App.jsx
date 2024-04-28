import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

const CartContext = createContext({
  cartItems: [],
  deleteItem: () => {},
  plusItem: () => {},
  minusItem: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 2, title: 'bar', price: 69, image: 'bar.jpg' },
  ]);

  return (
    <CartContext.Provider value={{ cartItems }}>
      <Outlet />
    </CartContext.Provider>
  );
}

export { App, CartContext };

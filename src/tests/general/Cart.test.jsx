import { render, screen } from '@testing-library/react';
import Cart from '../../components/general/Cart';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { createContext } from 'react';

describe('Cart component', () => {
  it('renders shopping cart title', () => {
    render(<Cart closeCart={() => {}} />);

    expect(
      screen.getByRole('heading', { name: /shopping cart/i }).textContent,
    ).toMatch('Shopping Cart');
  });

  it('renders closing shopping cart button that calls closing function when clicked', async () => {
    const closeCart = vi.fn();
    const user = userEvent.setup();

    render(<Cart closeCart={closeCart} />);

    await user.click(screen.getByRole('button', { name: /close/i }));

    expect(closeCart).toHaveBeenCalled();
  });

  it('renders no item message when there are no items in the cart', () => {
    const CartContext = createContext({});

    render(
      <CartContext.Provider value={[]}>
        <Cart closeCart={() => {}} />
      </CartContext.Provider>,
    );

    expect(
      screen.getByText('Go add some items to your cart!'),
    ).toBeInTheDocument();
  });
});

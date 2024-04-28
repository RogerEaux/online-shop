import { render, screen } from '@testing-library/react';
import Cart from '../../components/general/Cart';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { CartContext } from '../../App';

vi.mock('../../components/general/CartItem', () => ({
  default: ({ item }) => {
    return <h2 aria-label="item">{item.title}</h2>;
  },
}));

describe('Cart component', () => {
  it('renders shopping cart title', () => {
    render(<Cart />);

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
    const cartItems = [];

    render(
      <CartContext.Provider value={{ cartItems }}>
        <Cart />
      </CartContext.Provider>,
    );

    expect(
      screen.getByText('Go add some items to your cart!'),
    ).toBeInTheDocument();
  });

  it('renders items, subtotal and checkout button when there are items in cart', () => {
    const cartItems = [
      { id: 1, title: 'foo', price: 42, image: 'foo.jpg' },
      { id: 2, title: 'bar', price: 69, image: 'bar.jpg' },
    ];

    render(
      <CartContext.Provider value={{ cartItems }}>
        <Cart />
      </CartContext.Provider>,
    );

    expect(
      screen.getAllByRole('heading', { name: /item/i })[0].textContent,
    ).toMatch('foo');
    expect(
      screen.getAllByRole('heading', { name: /item/i })[1].textContent,
    ).toMatch('bar');

    expect(screen.getByText(`Subtotal: $111`)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /checkout/i }),
    ).toBeInTheDocument();
  });
});

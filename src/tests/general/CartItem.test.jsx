import { render, screen } from '@testing-library/react';
import CartItem from '../../components/general/CartItem';
import { describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const item = { title: 'foo', price: 42 };

describe('CartItem component', () => {
  it('renders item image', () => {
    render(
      <BrowserRouter>
        <CartItem item={item} />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('img', { name: /item image/i }),
    ).toBeInTheDocument();
  });

  it('renders item title', () => {
    render(
      <BrowserRouter>
        <CartItem item={item} />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: item.title }).textContent,
    ).toMatch(item.title);
  });

  it('render item price', () => {
    render(
      <BrowserRouter>
        <CartItem item={item} />
      </BrowserRouter>,
    );

    expect(screen.getByText(`$${item.price.toString()}`)).toBeInTheDocument();
  });

  it('renders delete item button that calls function when clicked', async () => {
    const deleteItem = vi.fn();
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <CartItem item={item} deleteItem={deleteItem} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /delete/i }));

    expect(deleteItem).toHaveBeenCalled();
  });
});

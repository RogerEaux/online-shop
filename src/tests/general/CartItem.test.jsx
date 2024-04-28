import { render, screen } from '@testing-library/react';
import CartItem from '../../components/general/CartItem';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

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
});

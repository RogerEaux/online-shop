import { render, screen } from '@testing-library/react';
import Cart from '../../components/general/Cart';
import { describe, expect, it } from 'vitest';

describe('Cart component', () => {
  it('renders shopping cart title', () => {
    render(<Cart />);

    expect(
      screen.getByRole('heading', { name: /shopping cart/i }).textContent,
    ).toMatch('Shopping Cart');
  });
});

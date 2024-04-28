import { render, screen } from '@testing-library/react';
import CartItem from '../components/CartItem';
import { describe, expect, it } from 'vitest';

describe('CartItem component', () => {
  it('renders item image', () => {
    render(<CartItem />);

    expect(
      screen.getByRole('img', { name: /item image/i }),
    ).toBeInTheDocument();
  });
});

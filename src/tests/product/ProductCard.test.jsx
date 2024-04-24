import { render, screen } from '@testing-library/react';
import ProductCard from '../../components/product/ProductCard';
import { describe, expect, it } from 'vitest';

describe('ProductCard component', () => {
  it('renders product image', async () => {
    render(<ProductCard />);

    expect(
      await screen.findByRole('img', { name: /product image/i }),
    ).toBeInTheDocument();
  });

  it('renders product title', async () => {
    render(<ProductCard />);

    expect(
      (await screen.findByRole('heading', { name: /title/i })).textContent,
    ).toMatch('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
  });

  it('renders product price', async () => {
    render(<ProductCard />);

    expect(await screen.findByText('$109.95')).toBeInTheDocument();
  });

  it('renders product description', async () => {
    render(<ProductCard />);

    expect(
      (await screen.findByRole('heading', { name: /description/i }))
        .textContent,
    ).toMatch(
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    );
  });
});

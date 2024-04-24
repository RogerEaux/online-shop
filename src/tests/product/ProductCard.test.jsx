import { render, screen } from '@testing-library/react';
import ProductCard from '../../components/product/ProductCard';
import { describe, expect, it } from 'vitest';

describe('ProductCard component', () => {
  it('renders product image', () => {
    render(<ProductCard />);

    expect(
      screen.getByRole('img', { name: /product image/i }),
    ).toBeInTheDocument();
  });

  it('renders item title', () => {
    render(<ProductCard />);

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
  });

  it('renders item price', () => {
    render(<ProductCard />);

    expect(screen.getByText(`$`)).toBeInTheDocument();
  });
});

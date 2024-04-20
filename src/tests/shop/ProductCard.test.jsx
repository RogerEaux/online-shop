import { render, screen } from '@testing-library/react';
import ProductCard from '../../components/shop/ProductCard';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('ProductCard component', () => {
  it('renders product image', () => {
    const product = {
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
      price: 64,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      rating: {
        rate: 3.3,
        count: 203,
      },
    };

    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('img', { name: /product image/i }),
    ).toBeInTheDocument();
  });

  it('renders product title', () => {
    const product = {
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
      price: 64,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      rating: {
        rate: 3.3,
        count: 203,
      },
    };

    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: /title/i }).textContent).toMatch(
      product.title,
    );
  });

  it('renders product price', () => {
    const product = {
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
      price: 64,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      rating: {
        rate: 3.3,
        count: 203,
      },
    };

    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(`$${product.price.toString()}`),
    ).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import ItemCard from '../../components/shop/ItemCard';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('ItemCard component', () => {
  it('renders item image', () => {
    const item = {
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
        <ItemCard item={item} />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('img', { name: /item image/i }),
    ).toBeInTheDocument();
  });

  it('renders item title', () => {
    const item = {
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
        <ItemCard item={item} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: /title/i }).textContent).toMatch(
      item.title,
    );
  });

  it('renders item price', () => {
    const item = {
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
        <ItemCard item={item} />
      </BrowserRouter>,
    );

    expect(screen.getByText(`$${item.price.toString()}`)).toBeInTheDocument();
  });
});

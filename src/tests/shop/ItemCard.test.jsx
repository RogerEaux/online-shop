import { render, screen } from '@testing-library/react';
import ItemCard from '../../components/shop/ItemCard';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const item = {
  title: 'foo',
  price: 42,
  image: 'bar.jpg',
  rating: {
    rate: 4.2,
    count: 69,
  },
};

describe('ItemCard component', () => {
  it('renders item image', () => {
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
    render(
      <BrowserRouter>
        <ItemCard item={item} />
      </BrowserRouter>,
    );

    expect(screen.getByText(`$${item.price.toString()}`)).toBeInTheDocument();
  });
});

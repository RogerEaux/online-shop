import { render, screen } from '@testing-library/react';
import ItemGrid from '../../components/shop/ItemGrid';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../../components/shop/ItemCard', () => ({
  default: ({ item }) => (
    <a key={item.id} href="/">
      {item.title}
    </a>
  ),
}));

const items = [
  { id: 1, title: 'foo' },
  { id: 2, title: 'bar' },
  { id: 3, title: 'baz' },
];

describe('ItemGrid component', () => {
  it('renders number of items displayed', () => {
    render(<ItemGrid items={items} />);

    expect(screen.getByText(`${items.length} items`)).toBeInTheDocument();
  });

  it('renders grid of items', () => {
    render(<ItemGrid items={items} />);

    expect(screen.getAllByRole('link')[0].textContent).toMatch('foo');
    expect(screen.getAllByRole('link')[1].textContent).toMatch('bar');
    expect(screen.getAllByRole('link')[2].textContent).toMatch('baz');
  });
});

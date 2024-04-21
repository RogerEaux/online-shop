import { render, screen } from '@testing-library/react';
import ItemGrid from '../../components/shop/ItemGrid';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

vi.mock('../../components/shop/ItemCard', () => ({
  default: ({ item }) => (
    <a key={item.id} href="/">
      {item.title}
      {item.price}
    </a>
  ),
}));

const items = [
  { id: 1, title: 'foo', price: 3, rating: { rate: 3 } },
  { id: 2, title: 'bar', price: 1, rating: { rate: 1 } },
  { id: 3, title: 'baz', price: 2, rating: { rate: 5 } },
];

describe('ItemGrid component', () => {
  it('renders number of items displayed', () => {
    render(<ItemGrid items={items} />);

    expect(screen.getByText(`${items.length} items`)).toBeInTheDocument();
  });

  it('renders items sorted by rating', async () => {
    const user = userEvent.setup();

    render(<ItemGrid items={items} />);

    await user.selectOptions(screen.getByRole('combobox'), 'Popular');

    expect(screen.getAllByRole('link')[0].textContent).toMatch('baz');
    expect(screen.getAllByRole('link')[1].textContent).toMatch('foo');
    expect(screen.getAllByRole('link')[2].textContent).toMatch('bar');
  });

  it('renders items sorted by low to high price', async () => {
    const user = userEvent.setup();

    render(<ItemGrid items={items} />);

    await user.selectOptions(screen.getByRole('combobox'), 'Price Low to High');

    expect(screen.getAllByRole('link')[0].textContent).toMatch('1');
    expect(screen.getAllByRole('link')[1].textContent).toMatch('2');
    expect(screen.getAllByRole('link')[2].textContent).toMatch('3');
  });

  it('renders items sorted by high to low price', async () => {
    const user = userEvent.setup();

    render(<ItemGrid items={items} />);

    await user.selectOptions(screen.getByRole('combobox'), 'Price High to Low');

    expect(screen.getAllByRole('link')[0].textContent).toMatch('3');
    expect(screen.getAllByRole('link')[1].textContent).toMatch('2');
    expect(screen.getAllByRole('link')[2].textContent).toMatch('1');
  });

  it('renders items sorted alphabetically A to Z', async () => {
    const user = userEvent.setup();

    render(<ItemGrid items={items} />);

    await user.selectOptions(screen.getByRole('combobox'), 'A to Z');

    expect(screen.getAllByRole('link')[0].textContent).toMatch('bar');
    expect(screen.getAllByRole('link')[1].textContent).toMatch('baz');
    expect(screen.getAllByRole('link')[2].textContent).toMatch('foo');
  });

  it('renders items sorted alphabetically Z to A', async () => {
    const user = userEvent.setup();

    render(<ItemGrid items={items} />);

    await user.selectOptions(screen.getByRole('combobox'), 'Z to A');

    expect(screen.getAllByRole('link')[0].textContent).toMatch('foo');
    expect(screen.getAllByRole('link')[1].textContent).toMatch('baz');
    expect(screen.getAllByRole('link')[2].textContent).toMatch('bar');
  });
});

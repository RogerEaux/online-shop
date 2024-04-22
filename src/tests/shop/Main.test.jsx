import { render, screen } from '@testing-library/react';
import Main from '../../components/shop/Main';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../../components/shop/ItemGrid', () => ({
  default: () => {
    <article></article>;
  },
}));

vi.mock('../../components/general/Categories', () => ({
  default: () => {
    <ul></ul>;
  },
}));

describe('Main component', () => {
  it('renders aside with categories heading', async () => {
    render(<Main />);

    expect(await screen.findByRole('complementary')).toContainElement(
      await screen.findByRole('heading', { name: /categories/i }),
    );
  });
});

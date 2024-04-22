import { render, screen } from '@testing-library/react';
import Banner from '../../components/shop/Banner';
import { describe, expect, it } from 'vitest';

describe('Banner component', () => {
  it('renders tech store heading', () => {
    render(<Banner />);

    expect(
      screen.getByRole('heading', { name: /future store/i }).textContent,
    ).toMatch('Future Store');
  });
});

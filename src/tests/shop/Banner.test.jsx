import { render, screen } from '@testing-library/react';
import Banner from '../../components/shop/Banner';

describe('Banner component', () => {
  it('renders tech store heading', () => {
    render(<Banner />);

    expect(
      screen.getByRole('heading', { name: /tech store/i }).textContent,
    ).toMatch('Tech Store');
  });
});

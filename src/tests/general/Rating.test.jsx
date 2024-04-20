import { render, screen } from '@testing-library/react';
import Rating from '../../components/general/Rating';
import { describe, expect, it } from 'vitest';

describe('Rating component', () => {
  it('renders rate and rating count', () => {
    const rating = {
      rate: 3.3,
      count: 203,
    };

    render(<Rating rating={rating} />);

    expect(screen.getByText(`${rating.rate} (${rating.count})`));
  });
});

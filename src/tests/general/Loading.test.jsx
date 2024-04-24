import { render, screen } from '@testing-library/react';
import Loading from '../../components/general/Loading';
import { describe, expect, it } from 'vitest';

describe('Loading component', () => {
  it('renders loading image', () => {
    render(<Loading />);

    expect(screen.getByRole('img', { name: /loading/i })).toBeInTheDocument();
  });
});

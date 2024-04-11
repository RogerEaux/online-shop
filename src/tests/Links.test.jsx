import { render, screen } from '@testing-library/react';
import Links from '../components/Links';

describe('Links component', () => {
  it('renders a list of links', () => {
    render(<Links />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('list')).toContainElement(
      screen.getByRole('link', { name: /home/i }),
    );
    expect(screen.getByRole('list')).toContainElement(
      screen.getByRole('link', { name: /shop/i }),
    );
  });
});

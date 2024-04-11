import { render, screen } from '@testing-library/react';
import Links from '../components/Links';
import { BrowserRouter } from 'react-router-dom';

describe('Links component', () => {
  it('renders a list of links', () => {
    render(
      <BrowserRouter>
        <Links />
      </BrowserRouter>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('list')).toContainElement(
      screen.getByRole('link', { name: /home/i }),
    );
    expect(screen.getByRole('list')).toContainElement(
      screen.getByRole('link', { name: /shop/i }),
    );
  });
});

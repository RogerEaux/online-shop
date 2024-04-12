import { render, screen } from '@testing-library/react';
import Links from '../components/Links';
import { BrowserRouter } from 'react-router-dom';
import { it } from 'vitest';

describe('Links component', () => {
  it('renders a list of links', () => {
    render(
      <BrowserRouter>
        <Links />
      </BrowserRouter>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders home and shop links', () => {
    render(
      <BrowserRouter>
        <Links />
      </BrowserRouter>,
    );
    expect(screen.getByRole('list')).toContainElement(
      screen.getByRole('link', { name: /home/i }),
    );
    expect(screen.getByRole('list')).toContainElement(
      screen.getByRole('link', { name: /shop/i }),
    );
  });
});

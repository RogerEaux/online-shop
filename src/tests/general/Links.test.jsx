import { render, screen } from '@testing-library/react';
import Links from '../../components/general/Links';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

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

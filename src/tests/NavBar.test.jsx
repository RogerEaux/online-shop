import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { expect } from 'vitest';

describe('NavBar component', () => {
  it('renders logo of fake company', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('link', { name: /fake company/i }),
    ).toContainElement(screen.getByRole('img', { name: /fake company/i }));
  });

  it('renders shopping cart button', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('button', { name: /shopping cart/i }),
    ).toBeInTheDocument();
  });
});

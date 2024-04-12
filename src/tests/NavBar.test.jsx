import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar component', () => {
  it("renders logo of 'The Company'", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(screen.getByRole('link', { name: /the company/i })).toContainElement(
      screen.getByRole('img', { name: /the company/i }),
    );
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

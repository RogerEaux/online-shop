import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component', () => {
  it("renders logo of 'The Company'", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('img', { name: /the company/i }),
    ).toBeInTheDocument();
  });

  it("renders 'The company' details", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: /about/i }).textContent).toMatch(
      /About The Company/i,
    );
    expect(
      screen.getByText(/The Company is an online tech commerce seller./i),
    ).toBeInTheDocument();
  });
});

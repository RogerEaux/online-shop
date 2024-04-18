import { render, screen } from '@testing-library/react';
import Footer from '../../components/general/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component', () => {
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

  it('renders copyright and API message', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByText('© 2024 RogerEaux')).toBeInTheDocument();
    expect(screen.getByText('Project made using')).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  it('renders FakeStore API link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('link', { name: /fakestore/i }),
    ).toBeInTheDocument();
  });
});

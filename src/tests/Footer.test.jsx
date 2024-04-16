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
});

import { render, screen } from '@testing-library/react';
import Banner from '../../components/home/Banner';
import { BrowserRouter } from 'react-router-dom';

describe('Banner component', () => {
  it('renders heading with company slogan ', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /slogan/i }).textContent,
    ).toMatch(/see into the future, use it now/i);
  });

  it('renders heading with quote', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { name: /quote/i }).textContent).toMatch(
      /look into the future, because that is where you are going to spend the rest of your life/i,
    );
  });

  it('renders start shopping link', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('link', { name: /start shopping/i }),
    ).toBeInTheDocument();
  });

  it('renders future tunnel image', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('img', { name: /tunnel looking into the future/i }),
    ).toBeInTheDocument();
  });

  it('renders three arrow images', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
    );
    expect(screen.getAllByAltText(/arrow/i).length).toBe(3);
  });
});

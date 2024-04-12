import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';
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
    ).toMatch(/see into the future, experience it now/i);
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

  it('renders start shopping button', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('button', { name: /start shopping/i }).textContent,
    ).toMatch(/start shopping/i);
    expect(
      screen.getByRole('button', { name: /start shopping/i }),
    ).toContainElement(screen.getByRole('link', { name: /start shopping/i }));
  });
});

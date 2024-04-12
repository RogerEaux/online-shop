import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';
import { BrowserRouter } from 'react-router-dom';
import { expect } from 'vitest';

describe('Banner component', () => {
  it('renders heading with company slogan ', () => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /slogan/i }).textContent,
    ).toMatch(/look into the future, experience it now/i);
  });
});

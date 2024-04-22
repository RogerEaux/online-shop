import { render, screen } from '@testing-library/react';
import Categories from '../../components/general/Categories';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Categories component', () => {
  it('renders a list of links including all categories', () => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('list')).toContainElement(
      screen.getByRole('link', { name: /all categories/i }),
      screen.getByRole('link', { name: /electronics/i }),
      screen.getByRole('link', { name: /jewelery/i }),
      screen.getByRole('link', { name: /^men's clothing/i }),
      screen.getByRole('link', { name: /women's clothing/i }),
    );
  });
});

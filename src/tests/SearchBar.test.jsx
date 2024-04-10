import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { expect } from 'vitest';

describe('Searchbar component', () => {
  it('renders text input', () => {
    render(<SearchBar />);
    expect(
      screen.getByRole('textbox', { name: /search/i }),
    ).toBeInTheDocument();
  });

  it('renders search button', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /search/i })).toBeInTheDocument();
  });
});

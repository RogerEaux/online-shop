import { render, screen } from '@testing-library/react';
import RequestError from '../../components/shop/RequestError';
import { describe, expect, it } from 'vitest';

describe('RequestError component', () => {
  it('renders error message', () => {
    const error = { message: 'Foo Error' };

    render(<RequestError error={error} />);

    expect(screen.getByRole('heading', { name: /error/i }).textContent).toMatch(
      `Oops! Looks like you've encountered a ${error.message}`,
    );
  });

  it.todo('renders retry button');

  it.todo('calls retry function when clicking retry button');
});

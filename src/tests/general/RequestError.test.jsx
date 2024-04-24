import { render, screen } from '@testing-library/react';
import RequestError from '../../components/general/RequestError';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('RequestError component', () => {
  it('renders error message', () => {
    const error = 'Foo Error';

    render(
      <BrowserRouter>
        <RequestError errorMessage={error} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: /error/i }).textContent).toMatch(
      `Oops! Looks like ${error}`,
    );
  });
});

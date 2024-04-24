import { render, screen } from '@testing-library/react';
import RequestError from '../../components/general/RequestError';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
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

  it('calls action function when clicking action button', async () => {
    const action = vi.fn();
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <RequestError action={action} actionButton={'bar'} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('link', { name: /action/i }).textContent).toMatch(
      'bar',
    );

    await user.click(screen.getByRole('link', { name: /action/i }));

    expect(action).toHaveBeenCalled();
  });
});

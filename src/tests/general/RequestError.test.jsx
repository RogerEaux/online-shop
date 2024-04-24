import { render, screen } from '@testing-library/react';
import RequestError from '../../components/general/RequestError';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('RequestError component', () => {
  it('renders error message', () => {
    const error = { message: 'Foo Error' };

    render(<RequestError error={error} />);

    expect(screen.getByRole('heading', { name: /error/i }).textContent).toMatch(
      `Oops! Looks like ${error.message}`,
    );
  });

  it('calls action function when clicking action button', async () => {
    const action = vi.fn();
    const user = userEvent.setup();

    render(<RequestError error={{}} action={action} />);

    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /action/i }));

    expect(action).toHaveBeenCalled();
  });
});

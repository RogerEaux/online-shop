import { render, screen } from '@testing-library/react';
import RequestError from '../../components/shop/RequestError';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('RequestError component', () => {
  it('renders error message', () => {
    const error = { message: 'Foo Error' };

    render(<RequestError error={error} retry={() => {}} />);

    expect(screen.getByRole('heading', { name: /error/i }).textContent).toMatch(
      `Oops! Looks like you've encountered a ${error.message}`,
    );
  });

  it('calls retry function when clicking retry button', async () => {
    const retry = vi.fn();
    const user = userEvent.setup();

    render(<RequestError error={{}} retry={retry} />);

    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /retry/i }));

    expect(retry).toHaveBeenCalled();
  });
});

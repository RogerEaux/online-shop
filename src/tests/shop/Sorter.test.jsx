import { render, screen } from '@testing-library/react';
import Sorter from '../../components/shop/Sorter';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Sorter component', () => {
  it('renders drop down list with sorters', () => {
    render(<Sorter updateOption={() => {}} />);

    expect(screen.getByLabelText(/sort by/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /sort by/i })).toContainElement(
      screen.getByRole('option', { name: /popularity/i }),
      screen.getByRole('option', { name: /price low to high/i }),
      screen.getByRole('option', { name: /price high to low/i }),
      screen.getByRole('option', { name: /a to z/i }),
      screen.getByRole('option', { name: /z to a/i }),
    );
  });

  it('calls updater function when option is selected', async () => {
    const updateOption = vi.fn();
    const user = userEvent.setup();

    render(<Sorter updateOption={updateOption} />);

    await user.selectOptions(screen.getByRole('combobox'), 'A to Z');

    expect(updateOption).toHaveBeenCalled();
  });
});

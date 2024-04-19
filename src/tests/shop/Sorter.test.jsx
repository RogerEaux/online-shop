import { render, screen } from '@testing-library/react';
import Sorter from '../../components/shop/Sorter';
import { describe, expect, it } from 'vitest';

describe('Sorter component', () => {
  it('renders drop down list with sorters', () => {
    render(<Sorter />);

    expect(screen.getByLabelText(/sort by/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /sort by/i })).toContainElement(
      screen.getByRole('option', { name: /popularity/i }),
      screen.getByRole('option', { name: /price low to high/i }),
      screen.getByRole('option', { name: /price high to low/i }),
      screen.getByRole('option', { name: /a to z/i }),
      screen.getByRole('option', { name: /z to a/i }),
    );
  });
});

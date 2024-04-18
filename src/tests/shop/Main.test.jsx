import { render, screen } from '@testing-library/react';
import Main from '../../components/shop/Main';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Main component', () => {
  it('renders number of items displayed', () => {
    const items = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ];

    render(
      <BrowserRouter>
        <Main items={items} />
      </BrowserRouter>,
    );

    expect(screen.getByText(`${items.length} items`)).toBeInTheDocument();
  });
});

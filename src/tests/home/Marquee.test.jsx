import { render, screen } from '@testing-library/react';
import Marquee from '../../components/home/Marquee';
import { describe, expect, it } from 'vitest';

describe('NavBar component', () => {
  it("renders four paragraphs containing 'The Future is Now is'", () => {
    render(<Marquee />);

    expect(screen.getAllByText(/the future is now is/i).length).toBe(3);
  });
});

import { render, screen } from '@testing-library/react';
import Main from '../../components/home/Main';
import { BrowserRouter } from 'react-router-dom';

describe('Main component', () => {
  it('renders heading containing an ad message ', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /promotional message/i }).textContent,
    ).toMatch('Do not hesitate. The time for innovation is NOW');
  });
});

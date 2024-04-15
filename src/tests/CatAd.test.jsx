import { render, screen } from '@testing-library/react';
import CatAd from '../components/CatAd';
import { BrowserRouter } from 'react-router-dom';

describe('CatAd component', () => {
  it('renders a section with a heading and image', () => {
    const title = 'Best Gaming PCs';

    render(
      <BrowserRouter>
        <CatAd title={title} />
      </BrowserRouter>,
    );

    expect(screen.getByRole('section')).toContainElement(
      screen.getByRole('heading', { name: title }),
      screen.getByRole('img', { name: title }),
    );
  });
});

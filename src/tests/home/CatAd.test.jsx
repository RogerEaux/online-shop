import { render, screen } from '@testing-library/react';
import CatAd from '../../components/home/CatAd';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('CatAd component', () => {
  it('renders a section with a heading, image and description', () => {
    const title = 'Best Gaming PCs';
    const description = 'Unleash your potential';

    render(
      <BrowserRouter>
        <CatAd
          title={title}
          cover={'gaming-pc.jpg'}
          description={description}
        />
      </BrowserRouter>,
    );

    expect(screen.getByRole('section')).toContainElement(
      screen.getByRole('heading', { name: title }),
      screen.getByRole('img', { name: title }),
      screen.getByRole('heading', { name: description }),
    );
  });
});

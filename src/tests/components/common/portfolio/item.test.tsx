import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PortfolioItem from '../../../../components/common/portfolio/item';

describe('PortfolioItem', () => {
  let container;
  beforeEach(() => {
    container = render(
      <MemoryRouter>
        <PortfolioItem
          project={{
            id: 'a_test_project',
            name: 'A Test Project',
            links: [],
            date: '2024',
            keywords: 'testable',
            icon: {
              src: 'test_img/50.png',
              alt: 'fake image',
            },
            images: [
              { full: 'test_img/100.png', half: 'test_img/50.png', quarter: 'test_img/25.png', alt: 'fake image' },
            ],
            description: 'Something I worked very hard on.',
            bullets: [],
          }}
          category="test"
          imagePreloaded={true}
        />
      </MemoryRouter>,
    ).container;
  });

  it('renders the project name', () => {
    expect(screen.getByText('A Test Project')).toBeInTheDocument();
  });

  it('links to the project detail page', () => {
    expect(container.firstChild).toHaveAttribute('href', '/project/test.a_test_project');
  });
});

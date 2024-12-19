import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { render, screen } from '@testing-library/react';
import { Portfolio } from '../../../../components/common/portfolio/index'

describe('Portfolio', () => {
  describe('when given a set of projects', () => {
    beforeEach(() => {
      render(
        <HelmetProvider>
          <MemoryRouter>
            <Portfolio
              title="Test Projects"
              projects={[
                {
                  id: "a_test_project",
                  name: "A Test Project",
                  links: [],
                  date: "2024",
                  keywords: "testable",
                  icon: {
                    src: "test_img/50.png",
                    alt: 'fake image',
                  },
                  images: [
                    { full: "test_img/100.png", half: "test_img/50.png", quarter: "test_img/25.png", alt: 'fake image' },
                  ],
                  description: "Something I worked very hard on.",
                  bullets: [],
                },
                {
                  id: "another_test_project",
                  name: "Another Test Project",
                  links: [],
                  date: "2024",
                  keywords: "testable",
                  icon: {
                    src: "test_img/50.png",
                    alt: 'fake image',
                  },
                  images: [
                    { full: "test_img/100.png", half: "test_img/50.png", quarter: "test_img/25.png", alt: 'fake image' },
                  ],
                  description: "Something else I worked very hard on.",
                  bullets: [],
                },
              ]}
              category="test"
            />
          </MemoryRouter>
        </HelmetProvider>
      );
    });

    it('renders the page title', () => {
      expect(screen.getByText('Test Projects')).toBeInTheDocument();
    });

    it('renders both a mobile and desktop version of each project', () => {
      expect(screen.getAllByText('A Test Project').length).toBe(2);
      expect(screen.getAllByText('Another Test Project').length).toBe(2);
    });
  });
});

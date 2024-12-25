import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { NavLink } from '../../../components/nav/link';

describe('NavLink', () => {
  describe('when not active', () => {
    beforeEach(() => {
      render(
        <HelmetProvider>
          <MemoryRouter>
            <NavLink
              name='Test'
              active={false}
            />
          </MemoryRouter>
        </HelmetProvider>,
      );
    });

    it('renders the name', () => {
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('links to a route that matches the name', () => {
      expect(screen.getByText('Test')).toHaveAttribute('href', '/test');
    });

    it('has an active class', () => {
      expect(screen.getByText('Test')).toHaveAttribute('class', 'nav-link');
    });
  });

  describe('when active', () => {
    beforeEach(() => {
      render(
        <HelmetProvider>
          <MemoryRouter>
            <NavLink
              name='Test'
              active={true}
            />
          </MemoryRouter>
        </HelmetProvider>,
      );
    });

    it('renders the name', () => {
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('has no link', () => {
      expect(screen.getByText('Test')).not.toHaveAttribute('href');
    });

    it('has an inactive class', () => {
      expect(screen.getByText('Test')).toHaveAttribute('class', 'nav-link-active');
    });
  });
});

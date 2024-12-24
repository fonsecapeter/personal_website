import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Nav } from '../../../components/nav/index';

describe('Nav', () => {
  describe('by default', () => {
    beforeEach(() => {
      global.window = Object.create(window);
      Object.defineProperty(window, 'location', {
        value: {
          href: 'https://peternfonseca.com/#/',
          hash: '#/'
        },
        writable: true
      });
      Object.defineProperty(window, 'scrollTo', { value: () => {} });
      render(
        <HelmetProvider>
          <MemoryRouter>
            <Nav />
          </MemoryRouter>
        </HelmetProvider>
      );
    });

    it('renders all links', () => {
      expect(screen.getByText("About")).toBeInTheDocument();
      expect(screen.getByText("Experience")).toBeInTheDocument();
      expect(screen.getByText("Code")).toBeInTheDocument();
      expect(screen.getByText("Art")).toBeInTheDocument();
    });

    it('activates the about link', () => {
      expect(screen.getByText("About")).toHaveAttribute('class', 'nav-link-active');
      expect(screen.getByText("Experience")).toHaveAttribute('class', 'nav-link');
      expect(screen.getByText("Code")).toHaveAttribute('class', 'nav-link');
      expect(screen.getByText("Art")).toHaveAttribute('class', 'nav-link');
    });
  });

  describe('when on a page', () => {
    beforeEach(() => {
      global.window = Object.create(window);
      Object.defineProperty(window, 'location', {
        value: {
          href: 'https://peternfonseca.com/#/code',
          hash:'#/code'
        },
        writable: true
      });
      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={['/code']}>
            <Nav />
          </MemoryRouter>
        </HelmetProvider>
      );
    });

    it('activates the matching link', () => {
      expect(screen.getByText("About")).toHaveAttribute('class', 'nav-link');
      expect(screen.getByText("Experience")).toHaveAttribute('class', 'nav-link');
      expect(screen.getByText("Code")).toHaveAttribute('class', 'nav-link-active');
      expect(screen.getByText("Art")).toHaveAttribute('class', 'nav-link');
    });
  });
});

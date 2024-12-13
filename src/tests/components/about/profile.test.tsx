import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { render, screen } from '@testing-library/react';
import { Profile } from '../../../components/about/profile';

describe('Profile', () => {
  beforeEach(() => {
    render(
          <HelmetProvider>
            <MemoryRouter>
              <Profile />
            </MemoryRouter>
          </HelmetProvider>
        );;
  });

  it('includes my name', () => {
    expect(screen.getByText('Peter Fonseca')).toBeInTheDocument();
  });

  it('lists links', () => {
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/peter-fonseca-727576121',
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'http://github.com/fonsecapeter',
    );
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute(
      'href',
      'https://www.behance.net/peterfonseca',
    );
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/peternfonseca',
    );
  });
});

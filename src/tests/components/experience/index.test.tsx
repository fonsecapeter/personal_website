import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { render, screen } from '@testing-library/react';
import { Experience } from '../../../components/experience/index';

describe('Experience', () => {
  beforeEach(() => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Experience />
        </MemoryRouter>
      </HelmetProvider>,
    );
  });

  it('links to my pdf resume', () => {
    expect(screen.getByText('[PDF]')).toHaveAttribute('href', 'not-a-real-file');
  });

  it('lists languages', () => {
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('lists job history', () => {
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Technician / Designer')).toBeInTheDocument();
  });

  it('lists education', () => {
    expect(screen.getByText('University of California, Santa Cruz')).toBeInTheDocument();
    expect(screen.getByText('App Academy')).toBeInTheDocument();
  });
});

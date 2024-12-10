import React from 'react';
import { render, screen } from '@testing-library/react';
import { Carousel } from '../../../components/common/carousel';

describe('Crousel', () => {
  const TEST_IMAGE = {
    full: 'test',
    half: 'test',
    quarter: 'test',
    alt: 'test',
  };
  it('can render with one image', () => {
    render(<Carousel images={[TEST_IMAGE]} />);
    const crouselElement = screen.getByTestId('carousel');
    expect(crouselElement).toBeInTheDocument();
  });
});

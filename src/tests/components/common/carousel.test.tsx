import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Carousel } from '../../../components/common/carousel';

describe('Crousel', () => {
  const IMAGE_1 = {
    full: 'test/1/100.png',
    half: 'test/1/50.png',
    quarter: 'test/1/25.png',
    alt: 'test image 1',
  };
  const IMAGE_2 = {
    full: 'test/2/100.png',
    half: 'test/2/50.png',
    quarter: 'test/2/25.png',
    alt: 'test image 2',
  };
  const IMAGE_3 = {
    full: 'test/3/100.png',
    half: 'test/3/50.png',
    quarter: 'test/3/25.png',
    alt: 'test image 3',
  };
  const IMAGE_4 = {
    full: 'test/4/100.png',
    half: 'test/4/50.png',
    quarter: 'test/4/25.png',
    alt: 'test image 4',
  };
  const IMAGE_5 = {
    full: 'test/5/100.png',
    half: 'test/5/50.png',
    quarter: 'test/5/25.png',
    alt: 'test image 5',
  };
  describe('with 2 images', () => {
    beforeEach(() => {
      render(<Carousel images={[IMAGE_1, IMAGE_2]} />);
    });

    it('can render with one image', () => {
      const crouselElement = screen.getByTestId('carousel');
      expect(crouselElement).toBeInTheDocument();
    });

    it('displays the first image by default', () => {
      const mainImageElement = screen.getByTestId('carousel-main-image');
      expect(mainImageElement).toHaveAttribute('src', 'test/1/50.png');
    });

    it('displays normal sized lane images for both images', () => {
      const laneImage1Element = screen.getByAltText('test image 1 (small)');
      const laneImage2Element = screen.getByAltText('test image 2 (small)');
      expect(laneImage1Element).toHaveAttribute('class', 'carousel-lane-image-selected');
      expect(laneImage2Element).toHaveAttribute('class', 'carousel-lane-image');
    });

    describe('when a lane image is clicked on', () => {
      it('replaces the main image', () => {
        const secondImage = screen.getByAltText('test image 2 (small)');
        fireEvent.click(secondImage);
        const mainImageElement = screen.getByTestId('carousel-main-image');
        expect(mainImageElement).toHaveAttribute('src', 'test/2/50.png');
      });
    });
  });

  describe('with 5 images', () => {
    it('displays mini lane images for all images', () => {
      render(<Carousel images={[IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5]} />);
      const laneImage1Element = screen.getByAltText('test image 1 (small)');
      const laneImage2Element = screen.getByAltText('test image 2 (small)');
      const laneImage3Element = screen.getByAltText('test image 3 (small)');
      const laneImage4Element = screen.getByAltText('test image 4 (small)');
      const laneImage5Element = screen.getByAltText('test image 5 (small)');
      expect(laneImage1Element).toHaveAttribute('class', 'carousel-lane-image-mini-selected');
      expect(laneImage2Element).toHaveAttribute('class', 'carousel-lane-image-mini');
      expect(laneImage3Element).toHaveAttribute('class', 'carousel-lane-image-mini');
      expect(laneImage4Element).toHaveAttribute('class', 'carousel-lane-image-mini');
      expect(laneImage5Element).toHaveAttribute('class', 'carousel-lane-image-mini');
    });
  });
});

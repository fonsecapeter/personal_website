import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PortfolioDetail } from '../../../../components/common/portfolio/detail';

describe('PortfolioDetail', () => {
  describe('when given an invalid project key', () => {
    it('renders a nice not found message', () => {
      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={['/project/art.something_bogus']}>
            <Routes>
              <Route path="/project/:projectKey" element={<PortfolioDetail />} />
            </Routes>
          </MemoryRouter>
        </HelmetProvider>,
      );
      expect(screen.getByText('Not Found')).toBeInTheDocument();
    });
  });

  describe('when given an invalid project category', () => {
    it('renders a nice not found message', () => {
      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={['/project/bonk.dolores_bench']}>
            <Routes>
              <Route path="/project/:projectKey" element={<PortfolioDetail />} />
            </Routes>
          </MemoryRouter>
        </HelmetProvider>,
      );
      expect(screen.getByText('Not Found')).toBeInTheDocument();
    });
  });

  describe('when given a valid project', () => {
    it('locates and renders the project', () => {
      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={['/project/art.dolores_bench']}>
            <Routes>
              <Route path="/project/:projectKey" element={<PortfolioDetail />} />
            </Routes>
          </MemoryRouter>
        </HelmetProvider>,
      );
      expect(screen.getByText('Dolores Bench')).toBeInTheDocument();
      expect(screen.getByText('2024-07-24')).toBeInTheDocument();
      expect(screen.getByText('pastel + sharpie')).toBeInTheDocument();
      expect(screen.getByText('A special place.')).toBeInTheDocument();
    });

    describe('with one image', () => {
      it('renders a simple img', () => {
        render(
          <HelmetProvider>
            <MemoryRouter initialEntries={['/project/code.api-buddy']}>
              <Routes>
                <Route path="/project/:projectKey" element={<PortfolioDetail />} />
              </Routes>
            </MemoryRouter>
          </HelmetProvider>,
        );
        expect(screen.getByTestId('portfolio-detail-img')).toBeInTheDocument();
        expect(screen.queryByTestId('carousel-main-image')).toBeNull();
        expect(screen.queryByTestId('portfolio-detail-vid')).toBeNull();
      });
    });

    describe('with multiple images', () => {
      it('renders a carousel', () => {
        render(
          <HelmetProvider>
            <MemoryRouter initialEntries={['/project/art.shop_class_shelf']}>
              <Routes>
                <Route path="/project/:projectKey" element={<PortfolioDetail />} />
              </Routes>
            </MemoryRouter>
          </HelmetProvider>,
        );
        expect(screen.queryByTestId('portfolio-detail-img')).toBeNull();
        expect(screen.getByTestId('carousel-main-image')).toBeInTheDocument();
        expect(screen.queryByTestId('portfolio-detail-vid')).toBeNull();
      });
    });

    describe('with a video', () => {
      describe('that has a standard aspect ratio', () => {
        it('renders a 16-9 video player', () => {
          render(
            <HelmetProvider>
              <MemoryRouter initialEntries={['/project/art.three-cities']}>
                <Routes>
                  <Route path="/project/:projectKey" element={<PortfolioDetail />} />
                </Routes>
              </MemoryRouter>
            </HelmetProvider>,
          );
          expect(screen.queryByTestId('portfolio-detail-img')).toBeNull();
          expect(screen.queryByTestId('carousel-main-image')).toBeNull();
          expect(screen.getByTestId('portfolio-detail-vid')).toHaveAttribute(
            'class',
            'portfolio-detail-media-vid-16-9',
          );
        });
      });

      describe('that has a non-standard aspect-ratio', () => {
        it('honors it', () => {
          render(
            <HelmetProvider>
              <MemoryRouter initialEntries={['/project/art.artists-in-residence']}>
                <Routes>
                  <Route path="/project/:projectKey" element={<PortfolioDetail />} />
                </Routes>
              </MemoryRouter>
            </HelmetProvider>,
          );
          expect(screen.queryByTestId('portfolio-detail-img')).toBeNull();
          expect(screen.queryByTestId('carousel-main-image')).toBeNull();
          expect(screen.getByTestId('portfolio-detail-vid')).toHaveAttribute(
            'class',
            'portfolio-detail-media-vid-4-3',
          );
        });
      });
    });
  });
});

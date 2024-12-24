import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import OhNoErrorBoundary from './components/common/error';
import { NotFound } from './components/common/not_found';

const LoadableAbout = lazy(() => import(
  /* webpackPrefetch: true */
  './components/about/index'
));
const LoadableExperience = lazy(() => import(
  /* webpackPrefetch: true */
  './components/experience/index'
));
const LoadableCode = lazy(() => import(
  /* webpackPrefetch: true */
  './components/code/index'
));
const LoadableArt = lazy(() => import(
  /* webpackPrefetch: true */
  './components/art/index'
));
const LoadablePortfolioItem = lazy(() => import(
  /* webpackPrefetch: true */
  './components/common/portfolio/detail'
));

export const AppRoutes = () => {
  return (
    <OhNoErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoadableAbout />} />
          <Route path="/about" element={<LoadableAbout />} />
          <Route path="/experience" element={<LoadableExperience />} />
          <Route path="/code" element={<LoadableCode />} />
          <Route path="/art" element={<LoadableArt />} />
          <Route
            path="/project/:projectKey"
            element={<LoadablePortfolioItem />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </OhNoErrorBoundary>
  );
};

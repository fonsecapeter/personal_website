import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from './components/common/loading';
import { NotFound } from './components/common/not_found';

const baseLoadableConfig = {
  loading: Loading,
  delay: 100,
  timeout: 10000,
};

const LoadableAbout = Loadable({
  loader: () => import(
    './components/about/index' // webpackChunkName: "about"
  ),
  ...baseLoadableConfig,
});
const LoadableExperience = Loadable({
  loader: () => import(
    './components/experience/index' // webpackChunkName: "experience"
  ),
  ...baseLoadableConfig,
});
const LoadableCode = Loadable({
  loader: () => import(
    './components/code/index' // webpackChunkName: "code"
  ),
  ...baseLoadableConfig,
});
const LoadableArt = Loadable({
  loader: () => import(
    './components/art/index' // webpackChunkName: "art"
  ),
  ...baseLoadableConfig,
});
const LoadablePortfolioItem = Loadable({
  loader: () => import(
    './components/common/portfolio/detail' // webpackChunkName: "porfolioDetail"
  ),
  ...baseLoadableConfig,
});

export const AppRoutes = () => {
  useEffect(() => {
    LoadableAbout.preload();
    LoadableExperience.preload();
    LoadableCode.preload();
    LoadableArt.preload();
    LoadablePortfolioItem.preload();
  });

  return (
    <Switch>
      <Route path="/" exact component={LoadableAbout} />
      <Route path="/about" component={LoadableAbout} />
      <Route path="/experience" component={LoadableExperience} />
      <Route path="/code" component={LoadableCode} />
      <Route path="/art" component={LoadableArt} />
      <Route
        path="/project/:projectKey"
        component={() => (
          <LoadablePortfolioItem />
        )}
      />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

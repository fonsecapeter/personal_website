import React, { Component } from 'react';
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
const LoadableDigitalWork = Loadable({
  loader: () => import(
    './components/digital_work/index' // webpackChunkName: "digitalWork"
  ),
  ...baseLoadableConfig,
});
const LoadablePhysicalWork = Loadable({
  loader: () => import(
    './components/physical_work/index' // webpackChunkName: "physicalWork"
  ),
  ...baseLoadableConfig,
});
const LoadableFilm = Loadable({
  loader: () => import(
    './components/film/index' // webpackChunkName: "film"
  ),
  ...baseLoadableConfig,
});
const LoadablePhotography = Loadable({
  loader: () => import(
    './components/photography/index' // webpackChunkName: "photography"
  ),
  ...baseLoadableConfig,
});
const LoadablePortfolioItem = Loadable({
  loader: () => import(
    './components/common/portfolio/detail' // webpackChunkName: "porfolioDetail"
  ),
  ...baseLoadableConfig,
});

export class AppRoutes extends Component {
  public componentDidMount() {
    LoadableAbout.preload();
    LoadableExperience.preload();
    LoadableDigitalWork.preload();
    LoadablePhysicalWork.preload();
    LoadableFilm.preload();
    LoadablePhotography.preload();
    LoadablePortfolioItem.preload();
  }

  public render = () => (
    <Switch>
      <Route path="/" exact component={LoadableAbout} />
      <Route path="/about" component={LoadableAbout} />
      <Route path="/experience" component={LoadableExperience} />
      <Route path="/digital-work" component={LoadableDigitalWork} />
      <Route path="/physical-work" component={LoadablePhysicalWork} />
      <Route path="/film" component={LoadableFilm} />
      <Route path="/photography" component={LoadablePhotography} />
      <Route
        path="/project/:projectKey"
        component={() => (
          <LoadablePortfolioItem />
        )}
      />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

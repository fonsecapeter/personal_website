import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from './components/common/loading';

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
const LoadablePortfolio = Loadable({
  loader: () => import(
    './components/portfolio/index' // webpackChunkName: "portfolio"
  ),
  ...baseLoadableConfig,
});
const LoadableContact = Loadable({
  loader: () => import(
    './components/contact/index' // webpackChunkName: "contact"
  ),
  ...baseLoadableConfig,
});

const prefetchComponents = () => {
  LoadableAbout.preload();
  LoadableExperience.preload();
  LoadablePortfolio.preload();
  LoadableContact.preload();
};

export class Routes extends React.Component {
  public componentDidMount() {
    prefetchComponents();
  }

  public render = () => (
    <Switch>
      <Route exact path="/" component={LoadableAbout} />
      <Route path="/about" component={LoadableAbout} />
      <Route path="/experience" component={LoadableExperience} />
      <Route path="/portfolio" component={LoadablePortfolio} />
      <Route path="/contact" component={LoadableContact} />
    </Switch>
  )
}

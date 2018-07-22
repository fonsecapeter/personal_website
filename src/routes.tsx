import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable';

import Loading from './components/common/loading';

const baseLoadableConfig = {
  loading: Loading,
  delay: 100,
  timeout: 10000,
};

const About = Loadable({
  loader: () => import('./components/about/index' /* webpackChunkName: "about"*/),
  ...baseLoadableConfig,
});
const Experience = Loadable({
  loader: () => import('./components/experience/index' /* webpackChunkName: "experience"*/),
  ...baseLoadableConfig,
});
const Portfolio = Loadable({
  loader: () => import('./components/portfolio/index' /* webpackChunkName: "portfolio"*/),
  ...baseLoadableConfig,
});
const Contact = Loadable({
  loader: () => import('./components/contact/index' /* webpackChunkName: "contact"*/),
  ...baseLoadableConfig,
});

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default Routes;

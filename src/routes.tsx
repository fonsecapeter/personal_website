import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './components/common/loading';

const baseLoadableConfig = {
  loading: Loading,
  delay: 100,
  timeout: 10000,
};

const About = Loadable({
  loader: () =>
    import('./components/about/index' /* webpackChunkName: "about"*/).then(
      object => object.default,
    ),
  ...baseLoadableConfig,
});
const Experience = Loadable({
  loader: () =>
    import('./components/experience/index' /* webpackChunkName: "experience"*/).then(
      object => object.default,
    ),
  ...baseLoadableConfig,
});
const Portfolio = Loadable({
  loader: () =>
    import('./components/portfolio/index' /* webpackChunkName: "portfolio"*/).then(
      object => object.default,
    ),
  ...baseLoadableConfig,
});
const Contact = Loadable({
  loader: () =>
    import('./components/contact/index' /* webpackChunkName: "contact"*/).then(
      object => object.default,
    ),
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

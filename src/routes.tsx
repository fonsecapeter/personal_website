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
  loader: () => import(/* webpackChunkName: "about"*/ './components/about/index'),
  ...baseLoadableConfig,
});
const Experience = Loadable({
  loader: () => import(/* webpackChunkName: "experience"*/ './components/experience/index'),
  ...baseLoadableConfig,
});
const Portfolio = Loadable({
  loader: () => import(/* webpackChunkName: "portfolio"*/ './components/portfolio/index'),
  ...baseLoadableConfig,
});
const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "contact"*/ './components/contact/index'),
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

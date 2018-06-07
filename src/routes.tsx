import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/about/about';
import Experience from './components/experience/experience';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

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

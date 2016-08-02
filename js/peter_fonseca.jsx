"use strict";

"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/app');
const Home = require('./components/home');
const Portfolio = require('./components/portfolio');
const Design = require('./components/design');
const Contact = require('./components/contact');
const Poster = require('./components/poster');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="/portfolio" component={ Portfolio } />
      <Route path="/design" component={ Design } />
      <Route path="/contact" component={ Contact } />
      <Route path="/poster" component={ Poster } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('main-content-for-react');
  ReactDOM.render(appRouter, root);
});

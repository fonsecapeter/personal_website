import React from 'react';
import { render } from '@hot-loader/react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

import { App } from './components/app';
import { AppRoutes } from './routes';

import './assets/scss/base.scss';
import './assets/img/favicon.ico';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <HashRouter>
      <App>
        <AppRoutes />
      </App>
    </HashRouter>
  </AppContainer>,
  rootEl,
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NewApp = require('./components/app').default;
    render(
      <AppContainer>
        <HashRouter>
          <NewApp>
            <AppRoutes />
          </NewApp>
        </HashRouter>
      </AppContainer>,
      rootEl,
    );
  });
}

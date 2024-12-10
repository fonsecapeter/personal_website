import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { App } from './components/app';
import { AppRoutes } from './routes';

import './assets/scss/base.scss';
import './assets/img/favicon.ico';

const rootEl = ReactDOM.createRoot(document.getElementById('root'));

rootEl.render(
  <HelmetProvider>
    <HashRouter>
      <App>
        <AppRoutes />
      </App>
    </HashRouter>
  </HelmetProvider>,
);

// eslint-disable-next-line no-unused-vars
import React, { Component, FunctionaComponent } from 'react';
import { Nav } from './nav/index';

interface AppProps {
  children: Array<Component>
}

export const App: FunctionaComponent<AppProps> = ({ children }) => (
  <div className="main-wrapper">
    <div className="left-column">
      <img
        src={require('../assets/img/logo.png')}
        className="logo"
        alt="P. Fonseca"
      />
      <Nav />
    </div>
    <div className="right-column">{children}</div>
  </div>
);

export default App;

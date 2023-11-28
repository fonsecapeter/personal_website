// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { RouteProps } from 'react-router';
import { Nav } from './nav/index';
import logo from '../assets/img/logo.png';

export const App = ({ children }: RouteProps) => (
  <div className="main-wrapper">
    <div className="left-column">
      <img
        src={logo}
        className="logo"
        alt="P. Fonseca"
      />
      <Nav />
    </div>
    <div className="right-column">{children}</div>
  </div>
);

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Nav } from './nav/index';
import logo from '../assets/img/logo.png';
import { AppRoutes } from '../routes';


export const App = () => (
  <div className="main-wrapper">
    <div className="left-column">
      <img
        src={logo}
        className="logo"
        alt="P. Fonseca"
      />
      <Nav />
    </div>
    <div className="right-column"><AppRoutes /></div>
  </div>
);

export default App;

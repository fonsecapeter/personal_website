// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ReactNode } from 'react';
import { Nav } from './nav/index';
import logo from '../assets/img/logo.png';

interface AppProps {
  readonly children: ReactNode;
}

export const App = ({ children }: AppProps) => (
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

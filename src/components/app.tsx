// eslint-disable-next-line no-unused-vars
import React, { Component, FunctionalComponent } from 'react';
import { Nav } from './nav/index';
import { Profile } from './profile';

interface AppProps {
  children: Array<Component>
}

export const App: FunctionalComponent<AppProps> = ({ children }) => (
  <div className="main-wrapper">
    <div className="left-column">
      <div className="logo">P. Fonseca</div>
      <Nav />
    </div>
    <div className="right-column">{children}</div>
    <Profile />
  </div>
);

export default App;

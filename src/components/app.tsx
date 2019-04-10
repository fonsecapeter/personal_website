// eslint-disable-next-line no-unused-vars
import React, { Component, FunctionalComponent } from 'react';
import { Nav } from './nav/index';
import { SideBar } from './side_bar';

interface AppProps {
  children: Array<Component>
}

export const App: FunctionalComponent<AppProps> = ({ children }) => (
  <div>
    <header>
      <Nav />
    </header>
    <div className="main-wrapper">
      <div className="main-content">
        <div className="left-column">{children}</div>
        <div className="right-column">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
);

export default App;

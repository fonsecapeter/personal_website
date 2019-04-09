import React from 'react';
import { Nav } from './common/nav';
import { SideBar } from './side_bar';

interface AppProps {
  children: Array<React.Component>
}

export const App: React.SFC<AppProps> = ({ children }) => (
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

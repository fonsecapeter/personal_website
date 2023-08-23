// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Nav } from './nav/index';

interface AppProps {
  children: Array<Component>
}

interface AppState {
  navCleared: boolean
}
const initialState: AppState = { navCleared: false };
const clearedNavState: AppState = { navCleared: true };

export class App extends Component<AppProps, AppState> {
  readonly state = initialState

  constructor(props: AppProps) {
    super(props);
    this.clearNav = this.clearNav.bind(this);
    this.unClearNav = this.unClearNav.bind(this);
  }

  private clearNav() {
    this.setState(clearedNavState);
  }

  private unClearNav() {
    this.setState(initialState);
  }

  public render() {
    const { children } = this.props;
    const { navCleared } = this.state;
    const childrenWithProps = React.cloneElement(children, { clearNav: this.clearNav, navCleared });
    return (
      <div className="main-wrapper">
        <div className="left-column">
          <img
            src={require('../assets/img/logo.png')}
            className="logo"
            alt="P. Fonseca"
          />
          <Nav cleared={navCleared} unClearNav={this.unClearNav} />
        </div>
        <div className="right-column">{childrenWithProps}</div>
      </div>
    );
  }
}

export default App;

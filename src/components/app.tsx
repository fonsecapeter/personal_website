import * as React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './side_bar';

class App extends React.Component<any, any> {
  public render() {
    const path = window.location.hash.replace('#', '');

    let navClass = 'nav-about';
    let aboutClass = 'nav-link';
    let experienceClass = 'nav-link';
    let portfolioClass = 'nav-link';
    let contactClass = 'nav-link';

    let aboutTo = 'about';
    let experienceTo = 'experience';
    let portfolioTo = 'portfolio';
    let contactTo = 'contact';

    const activeClass = 'nav-link-active';
    if (path === '/' || path === '/about') {
      navClass = 'nav-about';
      aboutClass = activeClass;
      aboutTo = '';
    } else if (path === '/experience') {
      navClass = 'nav-experience';
      experienceClass = activeClass;
      experienceTo = '';
    } else if (path === '/portfolio') {
      navClass = 'nav-portfolio';
      portfolioClass = activeClass;
      portfolioTo = '';
    } else if (path === '/contact') {
      navClass = 'nav-contact';
      contactClass = activeClass;
      contactTo = '';
    }

    return (
      <div>
        <header>
          <nav id="nav" className={navClass}>
            <Link className={aboutClass} to={aboutTo}>
              About
            </Link>
            <Link className={experienceClass} to={experienceTo}>
              Experience
            </Link>
            <Link className={portfolioClass} to={portfolioTo}>
              Portfolio
            </Link>
            <Link className={contactClass} to={contactTo}>
              Contact
            </Link>
          </nav>
          <div className="nav-underlay" />
        </header>
        <div className="main-wrapper">
          <div className="main-content">
            <div className="left-column">{this.props.children}</div>
            <div className="right-column">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

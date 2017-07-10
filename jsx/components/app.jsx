"use strict";

const React = require('react');
const Link = require('react-router').Link;

const SideBar = require('./side_bar');

const App = React.createClass({
  render () {
    let path = this.props.location.pathname;

    let aboutClass = "";
    let navClass = "nav-experience"
    let experienceClass = "";
    let portfolioClass = "";
    let contactClass = "";

    let activeClass = "nav-active";
    if ( path === "/" || path === "/about" ) {
      aboutClass = activeClass;
      navClass = "nav-about";
    } else if ( path === "/experience" ) {
      experienceClass = activeClass;
      navClass = "nav-experience";
    } else if ( path === "/portfolio" ) {
      portfolioClass = activeClass;
      navClass = "nav-portfolio";
    } else if ( path === "/contact" ) {
      contactClass = activeClass;
      navClass = "nav-contact";
    }

    return (
      <div>
        <header>
          <nav id="nav" className={ navClass }>
            <Link className={ aboutClass } to="about">About</Link> &nbsp;
            <Link className={ experienceClass } to="experience">Experience</Link> &nbsp;
            <Link className={ portfolioClass } to="portfolio">Portfolio</Link> &nbsp;
            <Link className={ contactClass } to="contact">Contact</Link>
          </nav>
          <div className="nav-underlay"></div>
        </header>
        <div className="main-wrapper">
          <div className="main-content">
            <div className="left-column">
              { this.props.children }
            </div>
            <div className="right-column">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;

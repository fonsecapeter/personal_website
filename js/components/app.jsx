"use strict";

const React = require('react');
const Link = require('react-router').Link;

const SideBar = require('./side_bar');

const App = React.createClass({
  render () {
    let path = this.props.location.pathname;

    let aboutClass = "header";
    let navClass = "nav-experience"
    let experienceClass = "header";
    let portfolioClass = "header";
    let contactClass = "header";

    if ( path === "/" || path === "/about" ) {
      aboutClass += " active";
      navClass = "nav-about";
    } else if ( path === "/experience" ) {
      experienceClass += " active";
      navClass = "nav-experience";
    } else if ( path === "/portfolio" ) {
      portfolioClass += " active";
      navClass = "nav-portfolio";
    } else if ( path === "/contact" ) {
      contactClass += " active";
      navClass = "nav-contact";
    }

    return (
      <div>
        <div id="header">
          <div id="nav" className={ navClass }>
            {/* <div className="stripe2"></div>
            <div className="stripe1"></div> */}
            <Link className={ aboutClass } to="about">About</Link> &nbsp;
            <Link className={ experienceClass } to="experience">Experience</Link> &nbsp;
            <Link className={ portfolioClass } to="portfolio">Portfolio</Link> &nbsp;
            <Link className={ contactClass } to="contact">Contact</Link>
          </div>
          <div id="bg"></div>
        </div>
        <div id="wrapper">
          <div id="main-content">
            <div id="left-column">
              { this.props.children }
            </div>
            <div id="right-column">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;

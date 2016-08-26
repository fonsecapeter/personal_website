"use strict";

const React = require('react');
const Link = require('react-router').Link;

const SideBar = require('./side_bar');

const App = React.createClass({
  render () {
    let path = this.props.location.pathname;

    let aboutClass = "header";
    let experienceClass = "header";
    let portfolioClass = "header";
    let contactClass = "header";

    if ( path === "/" || path === "/about" ) {
      aboutClass += " active";
    } else if ( path === "/experience" ) {
      experienceClass += " active";
    } else if ( path === "/portfolio" ) {
      portfolioClass += " active";
    } else if ( path === "/contact" ) {
      contactClass += " active";
    }

    return (
      <div className="shadowed">
        <div id="header">
          <div id="nav">
            <Link className={ aboutClass } to="/">About</Link> &nbsp;
            <Link className={ experienceClass } to="experience">Experience</Link> &nbsp;
            <Link className={ portfolioClass } to="portfolio">Portfolio</Link> &nbsp;
            <Link className={ contactClass } to="contact">Contact</Link></div>
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

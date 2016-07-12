"use strict";

const React = require('react');
const Link = require('react-router').Link;

const SideBar = require('./side_bar');

const App = React.createClass({
  render () {
    return (
      <div>
        <div id="header">
          <div id="nav"><Link to="/">Home</Link> &nbsp; <Link to="portfolio">Portfolio</Link> &nbsp; <Link to="design">Design</Link> <Link to="contact">Contact</Link></div>
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

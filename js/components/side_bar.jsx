"use strict";

const React = require('react');

const SideBar = React.createClass ({
  render () {
    return (
      <div className="fixed">
        <div id="main-image"><img className="circular" src="icons/headshot.jpg" width="160" /></div>
  			<div className="sidebar">
  				<p>Peter Fonseca</p>
  				<p>Software Developer</p>
  				<h3></h3>
  				<div>
  					<a href="http://github.com/fonsecapeter" target="_blank"><img src="icons/GitHub-Mark-32px.png" size="18px" /></a> &nbsp; &nbsp; <a href="https://www.linkedin.com/in/peter-fonseca-727576121" target="_blank"><img src="icons/In-2C-28px-R.png" /></a> &nbsp; <a href="https://www.facebook.com/peter.fonseca.35" target="_blank"><img src="./icons/FB-f-Logo__blue_29.png" size="21px"/></a>
  				</div>
  			</div>
      </div>
    );
  }
});

module.exports = SideBar;

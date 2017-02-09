"use strict";

const React = require('react');

const SideBar = React.createClass ({
  render () {
    return (
      <div className="fixed">
        <div id="main-image"><img className="circular" src="icons/headshot.jpg" width="160" /></div>
  			<div className="sidebar">
  				<p>Peter Fonseca</p>
  				<p>Software Engineer</p>
  				<h3></h3>
  				<div>
  					<a href="http://github.com/fonsecapeter" target="_blank">
              <img className="social-git" src="icons/social/github_64px.png" height="32px" />
            </a>
            <a href="https://www.linkedin.com/in/peter-fonseca-727576121" target="_blank">
              <img className="social" src="icons/social/linkedin_64px.png" height="32px" />
            </a>
            <a href="https://www.facebook.com/peter.fonseca.35" target="_blank">
              <img className="social" src="icons/social/facebook_64px.png" height="32px" />
            </a>
  				</div>
  			</div>
      </div>
    );
  }
});

module.exports = SideBar;

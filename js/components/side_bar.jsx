"use strict";

const React = require('react');

const SideBar = React.createClass ({
  render () {
    return (
      <div className="side-bar">
        <div id="side-bar-headshot">
          <img className="side-bar-headshot-image" src="public/img/icons/headshot.jpg" width="160" />
        </div>
  			<div className="side-bar-content">
  				<p>Peter Fonseca</p>
  				<p>Software Engineer</p>
  				<h3></h3>
  				<div>
  					<a href="http://github.com/fonsecapeter" target="_blank">
              <img className="side-bar-content-social-git" src="public/img/icons/social/github_64px.png" height="32px" />
            </a>
            <a href="https://www.linkedin.com/in/peter-fonseca-727576121" target="_blank">
              <img className="side-bar-content-social" src="public/img/icons/social/linkedin_64px.png" height="32px" />
            </a>
            <a href="https://www.facebook.com/peter.fonseca.35" target="_blank">
              <img className="side-bar-content-social" src="public/img/icons/social/facebook_64px.png" height="32px" />
            </a>
  				</div>
  			</div>
      </div>
    );
  }
});

module.exports = SideBar;

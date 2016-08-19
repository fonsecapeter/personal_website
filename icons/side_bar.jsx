"use strict";

const React = require('react');

const SideBar = React.createClass ({
  getInitialState () {
    return {
      gitIcon: "icons/GitHub-Mark-32px.png",
      linkedIcon: "icons/In-2C-28px.png",
      fbIcon: "icons/FB-f-Logo__blue_29.png"
    };
  },

  orangeGit () {
    this.setState({
      gitIcon: "icons/GitHub-Mark-32px.png"
    });
  },

  revertGit () {
    this.setState({
      gitIcon: "icons/GitHub-Mark-32px.png"
    });
  },

  orangeLinked () {
    this.setState({
      linkedIcon: "icons/In-2C-28px_hover.png"
    });
  },

  revertLinked () {
    this.setState({
      linkedIcon: "icons/In-2C-28px.png"
    });
  },

  orangeFb () {
    this.setState({
      fbIcon: "icons/FB-f-Logo__hover_29.png"
    });
  },

  revertFb () {
    this.setState({
      fbIcon: "icons/FB-f-Logo__blue_29.png"
    });
  },

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
              <img src={ this.state.gitIcon } size="18px" onMouseOver={ this.orangeGit } onMouseOut={ this.revertGit }/>
            </a> &nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/peter-fonseca-727576121" target="_blank">
              <img src={ this.state.linkedIcon } onMouseOver={ this.orangeLinked } onMouseOut={ this.revertLinked }/>
            </a> &nbsp;
            <a href="https://www.facebook.com/peter.fonseca.35" target="_blank">
              <img src={ this.state.fbIcon } size="21px" onMouseOver={ this.orangeFb } onMouseOut={ this.revertFb }/>
            </a>
  				</div>
  			</div>
      </div>
    );
  }
});

module.exports = SideBar;

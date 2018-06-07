import * as React from 'react';
const me = require('../assets/img/icons/me.jpg');
const gitHub = require('../assets/img/icons/social/github_64px.png');
const linkedIn = require('../assets/img/icons/social/linkedin_64px.png');
const faceBook = require('../assets/img/icons/social/facebook_64px.png');

class SideBar extends React.Component<any, any> {
  public render() {
    return (
      <div className="side-bar">
        <div id="side-bar-headshot">
          <img className="side-bar-headshot-image" src={me} width="160" />
        </div>
        <div className="side-bar-content">
          <div className="side-bar-content-name">
            <p>Peter Fonseca</p>
            <p>Software Engineer</p>
          </div>
          <div>
            <a href="http://github.com/fonsecapeter" target="_blank">
              <img className="side-bar-content-social-git" src={gitHub} height="32px" />
            </a>
            <a href="https://www.linkedin.com/in/peter-fonseca-727576121" target="_blank">
              <img className="side-bar-content-social" src={linkedIn} height="32px" />
            </a>
            <a href="https://www.facebook.com/peter.fonseca.35" target="_blank">
              <img className="side-bar-content-social" src={faceBook} height="32px" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;

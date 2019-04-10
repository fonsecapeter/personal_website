// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';

const me = require('../assets/img/icons/me.jpg');
const gitHub = require('../assets/img/icons/social/github.svg');
const linkedIn = require('../assets/img/icons/social/linkedin.svg');
const behance = require('../assets/img/icons/social/behance.svg');

export const SideBar: FunctionalComponent = () => (
  <div className="side-bar">
    <div id="side-bar-headshot">
      <img
        className="side-bar-headshot-image"
        src={me}
        width="160"
        alt="Peter's Face"
      />
    </div>
    <div className="side-bar-content">
      <div className="side-bar-content-name">
        <p>Peter Fonseca</p>
        <p>Software Engineer</p>
      </div>
      <div>
        <a
          href="http://github.com/fonsecapeter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="side-bar-content-social"
            src={gitHub}
            height="32px"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/peter-fonseca-727576121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="side-bar-content-social"
            src={linkedIn}
            height="32px"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://www.behance.net/peterfonseca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="side-bar-content-social"
            src={behance}
            height="32px"
            alt="Behance"
          />
        </a>
      </div>
    </div>
  </div>
);

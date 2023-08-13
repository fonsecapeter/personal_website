// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';

const me = require('../../assets/img/me.jpg');
const gitHub = require('../../assets/img/icons/social/github.svg');
const linkedIn = require('../../assets/img/icons/social/linkedin.svg');
const behance = require('../../assets/img/icons/social/behance.svg');

export const Profile: FunctionalComponent = () => (
  <div className="profile">
    <div id="profile-headshot">
      <img
        className="profile-headshot-image"
        src={me}
        width="160"
        alt="Peter's Face"
      />
    </div>
    <div className="profile-content">
      <div className="profile-content-name">
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
            className="profile-content-social"
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
            className="profile-content-social"
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
            className="profile-content-social"
            src={behance}
            height="32px"
            alt="Behance"
          />
        </a>
      </div>
    </div>
  </div>
);

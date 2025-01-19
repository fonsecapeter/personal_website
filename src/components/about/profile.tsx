// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import me from '../../assets/img/me.jpg';
import gitHub from '../../assets/img/icons/social/github.svg';
import linkedIn from '../../assets/img/icons/social/linkedin.svg';
import behance from '../../assets/img/icons/social/behance.svg';
import ig from '../../assets/img/icons/social/ig.png';
import preloadImages from '../common/image/preload';
import ImagePlaceholder from '../common/image/placeholder';

const Profile = () => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  useEffect(() => {
    preloadImages({
      images: [me],
      setIsPreloaded,
    });
  }, []);
  return (
    <div className="profile">
      <div id="profile-headshot">
        {isPreloaded ? (
          <img
            className="profile-headshot-image"
            src={me}
            width="160"
            alt="Peter's Face"
          />
        ) : (
          <div className="profile-headshot-image">
            <ImagePlaceholder width={160} height={160} round={true} />
          </div>
        )}
      </div>
      <div className="profile-content">
        <div className="profile-content-name">
          <h3>Peter Fonseca</h3>
        </div>
        <div>
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
          <a
            href="https://www.instagram.com/peternfonseca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="profile-content-social-rounder"
              src={ig}
              height="32px"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

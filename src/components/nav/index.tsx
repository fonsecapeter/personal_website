import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from './link';

const NavBase = () => {
  const ABOUT = 'about';
  const EXPERIENCE = 'experience';
  const CODE = 'code';
  const ART = 'art';
  const links = [ABOUT, EXPERIENCE, CODE, ART];
  let path = window.location.hash.replace('#/', '');
  if (path.length === 0) {
    path = ABOUT;
  }
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <nav id="nav" className="nav">
      {links.map((link) => (
        <NavLink
          name={link}
          active={path === link}
          onClick={scrollToTop}
          key={link}
        />
      ))}
    </nav>
  );
};

export const Nav = withRouter(NavBase);

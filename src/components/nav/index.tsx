import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from './nav_link';

const NavBase = () => {
  const path = window.location.hash.replace('#/', '');
  const scrollToTop = () => window.scrollTo(0, 0);
  const ABOUT = 'about';
  const EXPERIENCE = 'experience';
  const CODE = 'code';
  const ART = 'art';
  const links = [ABOUT, EXPERIENCE, CODE, ART];
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

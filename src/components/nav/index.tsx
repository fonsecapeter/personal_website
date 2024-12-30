import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './link';

const Nav = () => {
  const location = useLocation();
  const ABOUT = 'about';
  const EXPERIENCE = 'experience';
  const CODE = 'code';
  const ART = 'art';
  const links = [ABOUT, EXPERIENCE, CODE, ART];
  let path = window.location.hash.replace('#/', '');
  if (path.length === 0) {
    path = ABOUT;
  }
  useEffect(() => {
    path = window.location.hash.replace('#/', '');
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav id="nav" className="nav">
      {links.map((link) => (
        <NavLink
          name={link}
          active={path === link}
          key={link}
        />
      ))}
    </nav>
  );
};

export default Nav;

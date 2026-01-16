import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './link';

const Nav = () => {
  const location = useLocation();
  const ABOUT = '/about';
  const links = {
    'About': ABOUT,
    'Experience': '/experience',
    'Code': '/code',
    'Art': 'https://www.studio1way.com',
  };
  let currentPath = window.location.hash.replace('#', '');
  if (currentPath.length === 0 || currentPath === '/') {
    currentPath = ABOUT;
  }
  useEffect(() => {
    currentPath = window.location.hash.replace('#', '');
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav id="nav" className="nav">
      {Object.entries(links).map(([name, to]) => (
        <NavLink
          name={name}
          to={to}
          active={to === currentPath}
          key={name}
        />
      ))}
    </nav>
  );
};

export default Nav;

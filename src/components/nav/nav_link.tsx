// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  name: string,
  active: boolean,
  onClick: Function,
}

const capitalize = (word: string) => (
  word.charAt(0).toUpperCase() + word.slice(1)
);

export const NavLink: FunctionalComponent<NavLinkProps> = ({ name, active, onClick }) => {
  const text = capitalize(name);
  if (active) {
    return (
      <span className="nav-link-active">
        {text}
      </span>
    );
  }
  return (
    <Link
      className="nav-link"
      to={name}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

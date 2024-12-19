// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

type NavLinkProps = {
  readonly name: string,
  readonly active: boolean,
  readonly onClick: () => void,
};

const slugify = (words: string): string => (
  words
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
);


const capitalize = (word: string): string => (
  word.charAt(0).toUpperCase() + word.slice(1)
);

export const NavLink = ({ name, active, onClick }: NavLinkProps) => {
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
      to={`/${slugify(name)}`}
      onClick={() => onClick()}
    >
      {text}
    </Link>
  );
};

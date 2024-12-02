// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Project } from '../../../content/portfolio/projects';

type CodeProps = {
  readonly project: Project,
  readonly category: string,
};

export const PortfolioItem = ({ project, category }: CodeProps) => {
  let iconImageClass = 'portfolio-item-icon-image';

  return (
    <Link
      to={`/project/${category}.${project.id}`}
      className="portfolio-item"
    >
      <div className="portfolio-item-icon">
        <img
          className={iconImageClass}
          src={project.icon.src}
          alt={project.icon.alt}
        />
      </div>
      <div className="portfolio-item-content">
        <h3 className="portfolio-item-title">
          {project.name}
        </h3>
      </div>
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Project } from '../../../content/portfolio/projects';

interface CodeProps {
  project: Project,
  category: string,
}

export const PortfolioItem: FunctionComponent<CodeProps> = ({ project, category }) => {
  let iconImageClass = 'portfolio-item-icon-image';
  if (project.icon.small) {
    iconImageClass += ' portfolio-item-icon-image-small';
  }

  return (
    <Link
      to={`/project/${category}.${project.id}`}
      className="portfolio-item"
    >
      <div className="portfolio-item-icon">
        <img
          className={iconImageClass}
          src={project.icon.src}
          alt="portfolio icon"
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

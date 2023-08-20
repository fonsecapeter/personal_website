// eslint-disable-next-line no-unused-vars
import React, { FunctionaComponent } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Project } from '../../../content/portfolio/projects';

interface DigitalWorkProps {
  project: Project,
}

export const PortfolioItem: FunctionaComponent<DigitalWorkProps> = ({ project }) => {
  let iconImageClass = 'portfolio-item-icon-image';
  if (project.icon.small) {
    iconImageClass += ' portfolio-item-icon-image-small';
  }

  return (
    <Link
      to={`/project/digital.${project.id}`}
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

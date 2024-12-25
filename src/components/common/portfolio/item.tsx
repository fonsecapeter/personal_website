import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../../content/portfolio/projects';

type CodeProps = {
  readonly project: Project,
  readonly category: string,
};

export const PortfolioItem = ({ project, category }: CodeProps) => (
  <Link
    to={`/project/${category}.${project.id}`}
    className="portfolio-item"
  >
    <div className="portfolio-item-icon">
      <img
        className="portfolio-item-icon-image"
        src={project.icon.src}
        alt={project.icon.alt}
        loading="lazy"
      />
    </div>
    <div className="portfolio-item-content">
      <h3 className="portfolio-item-title">
        {project.name}
      </h3>
    </div>
  </Link>
);

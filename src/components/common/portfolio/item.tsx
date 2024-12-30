import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../../content/portfolio/projects';
import ImagePlaceholder from '../image/placeholder';

interface CodeProps {
  readonly project: Project;
  readonly category: string;
  readonly imagePreloaded: boolean;
}

const PortfolioItem = ({ project, category, imagePreloaded = true }: CodeProps) => (
  <Link
    to={`/project/${category}.${project.id}`}
    className="portfolio-item"
  >
    <div className="portfolio-item-icon">
      {imagePreloaded ? (
        <img
          className="portfolio-item-icon-image"
          src={project.icon.src}
          alt={project.icon.alt}
        />
      ) : (
        <div className="portfolio-item-icon-image">
          <ImagePlaceholder height={200} />
        </div>
      )}
    </div>
    <div className="portfolio-item-content">
      <h3 className="portfolio-item-title">
        {project.name}
      </h3>
    </div>
  </Link>
);

export default PortfolioItem;

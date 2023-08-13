// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { PortfolioItem } from './portfolio_item';
// eslint-disable-next-line no-unused-vars
import { Project } from '../../../content/portfolio/projects';
import '../../../assets/scss/portfolio.scss';

interface PortfolioProps {
  title: String,
  projects: Array<Project>
}

export const Portfolio: FunctionalComponent<PortfolioProps> = ({ title, projects }) => (
  <div>
    <h1 className="page-title">{ title }</h1>
    <div className="portfolio-list">
      <div className="portfolio-column">
        {projects.map(project => (
          <PortfolioItem
            project={project}
            tabIndex={0}
            key={project.name}
          />
        ))}
      </div>
      <div className="portfolio-column-desktop">
        {projects.map((project, idx) => {
          if (idx % 2 === 0) {
            return (
              <PortfolioItem
                project={project}
                tabIndex={-1}
                key={project.name}
              />
            );
          }
          return '';
        })}
      </div>
      <div className="portfolio-column-desktop">
        {projects.map((project, idx) => {
          if (idx % 2 !== 0) {
            return (
              <PortfolioItem
                project={project}
                tabIndex={-1}
                key={project.name}
              />
            );
          }
          return '';
        })}
      </div>
    </div>
  </div>
);

export default Portfolio; // for dynamic import

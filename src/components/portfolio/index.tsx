// eslint-disable-next-line no-unused-vars
import React, { FunctionalComponent } from 'react';
import { PortfolioItem } from './portfolio_item';
import { PROJECTS } from '../../content/projects';
import '../../assets/scss/portfolio.scss';

export const Portfolio: FunctionalComponent = () => (
  <div>
    <h1 className="portfolio-title">Personal Projects</h1>
    <div className="portfolio-list">
      <div className="portfolio-column">
        {PROJECTS.map(project => (
          <PortfolioItem
            project={project}
            tabIndex={0}
            key={project.name}
          />
        ))}
      </div>
      <div className="portfolio-column-desktop">
        {PROJECTS.map((project, idx) => {
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
        {PROJECTS.map((project, idx) => {
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
